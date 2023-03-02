import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'

const authorizationHeader = {
	'Content-Type': 'application/json',
	authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}`,
}

export const load = (async ({ fetch }) => {
	const legal = await fetch(`${env.PAYLOADCMS_URL}/api/globals/legal`, {
		method: 'GET',
		headers: authorizationHeader,
	}).then((res) => res.json())

	return {
		legal: {
			title: legal.title,
			text: legal.text,
		},
	}
}) satisfies PageServerLoad
