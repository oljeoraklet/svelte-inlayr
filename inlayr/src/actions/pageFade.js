import { sineOut } from 'svelte/easing';

let timing = 250;

export const fadeIn = (_, { duration = timing, delay = timing }) => ({
	duration,
	delay,
	easing: sineOut,
	css: (t) => `opacity: ${t}`
});
export const fadeOut = (_, { duration = timing }) => ({
	duration,
	delay: 0,
	easing: sineOut,
	css: (t) => `opacity: ${t}`
});
