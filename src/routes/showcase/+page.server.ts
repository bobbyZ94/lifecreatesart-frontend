import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'

const authorizationHeader = {
	'Content-Type': 'application/json',
	authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}`,
}

export const load = (async ({ fetch }) => {
	const showcase = await fetch(`${env.PAYLOADCMS_URL}/api/showcase?where[_status][equals]=published`, {
		method: 'GET',
		headers: authorizationHeader,
	}).then((res) => res.json())

	return {
		showcase: showcase.docs,
	}
}) satisfies PageServerLoad
