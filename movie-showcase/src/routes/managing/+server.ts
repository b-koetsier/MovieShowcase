import { API_KEY } from '$env/static/private'

import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    const { title, year } = await request.json();
    
    const url = `https://www.omdbapi.com/?t=${title}&y=${year}&apikey=${API_KEY}`;
  
    const response = await fetch(url);
    const movie = await response.json();

    return json(movie);
};