import type { APIRoute } from 'astro';

export const prerender = false;

const usernamePattern = /^(?!.*--)[A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?$/;

const errorResponse = (message: string, status: number, headers: HeadersInit = {}) =>
	new Response(JSON.stringify({ error: message }), {
		status,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store',
			...headers,
		},
	});

export const GET: APIRoute = async ({ params }) => {
	const username = params.username;
	if (!username || !usernamePattern.test(username)) {
		return errorResponse('Invalid GitHub username', 400);
	}

	let upstream: Response;
	try {
		upstream = await fetch(`https://github.com/${encodeURIComponent(username)}.contribs`, {
			headers: { Accept: 'application/json' },
		});
	} catch {
		return errorResponse('Unable to reach GitHub', 502);
	}

	if (!upstream.ok) {
		const status = upstream.status === 404 || upstream.status === 429 ? upstream.status : 502;
		const headers: Record<string, string> = {};
		const retryAfter = upstream.headers.get('Retry-After');
		if (upstream.status === 429 && retryAfter) {
			headers['Retry-After'] = retryAfter;
		}
		return errorResponse('GitHub could not provide contribution data', status, headers);
	}

	let data: unknown;
	try {
		data = await upstream.json();
	} catch {
		return errorResponse('GitHub returned invalid JSON', 502);
	}

	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
		},
	});
};
