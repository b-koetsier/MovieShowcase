import { writable } from 'svelte/store';

export const movieArray = writable([]);
export const slideDuration = writable(5);
export const carouselItemCount = writable(1);