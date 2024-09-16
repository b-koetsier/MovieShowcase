import { writable } from 'svelte/store';

/**
 * @typedef {Object} Movie
 * @property {string} Title
 * @property {number} Year
 * @property {string} Plot
 * @property {string} Poster
 */

/**
 * @type {import('svelte/store').Writable<Movie[]>}
 */
export const movieArray = writable([]);

/**
 * @type {import('svelte/store').Writable<number>}
 */
export const slideDuration = writable(5);

/**
 * @type {import('svelte/store').Writable<number>}
 */
export const carouselItemCount = writable(1);