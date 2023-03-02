import { env } from '$env/dynamic/private'
import type { PageServerLoad } from './$types'

const authorizationHeader = {
	'Content-Type': 'application/json',
	authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}`,
}

export const load = (async ({ fetch }) => {
	const settings = await fetch(`${env.PAYLOADCMS_URL}/api/globals/settings`, {
		method: 'GET',
		headers: authorizationHeader,
	}).then((res) => res.json())

	return {
		settings: {
			owner: settings.owner,
			company: settings.company,
			city: settings.city,
			street: settings.street,
			email: settings.email,
		},
	}
}) satisfies PageServerLoad
