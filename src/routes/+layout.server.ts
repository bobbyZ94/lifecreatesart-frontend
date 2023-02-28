import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types';

const authorizationHeader = {
  'Content-Type': 'application/json',
  authorization: `users API-Key ${env.PAYLOADCMS_API_KEY}`
}

export const load = (async ({ fetch }) => {
  const articles = await fetch(`${env.PAYLOADCMS_URL}/api/articles?where[_status][equals]=published`, {
    method: 'GET',
    headers: authorizationHeader
  }).then((res) => res.json())

  return {
    articles: articles.docs
  };
}) satisfies LayoutServerLoad