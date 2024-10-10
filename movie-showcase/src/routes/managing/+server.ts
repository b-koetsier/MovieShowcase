import { API_KEY } from '$env/static/private'

import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    const { title, year } = await request.json();
    const url = `https://www.omdbapi.com/?t=${title}&y=${year}&apikey=${API_KEY}`

    const response = await fetch(url)

    if (!response.ok) {
        return json({ error: `Failed to fetch data: ${response.statusText}` }, { status: response.status })
    }

    const movie = await response.json()
    if (movie.Response === 'False') {
        throw error(404, 'Movie not found');
    }

    return json(movie);
};
