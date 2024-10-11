import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Movie } from './models/movie';

export const movieArray: Writable<Movie[]> = writable([]);

export const slideDuration: Writable<number> = writable(5);

export const carouselItemCount: Writable<number> = writable(1);

