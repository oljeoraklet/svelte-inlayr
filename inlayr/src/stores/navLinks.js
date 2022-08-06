import { writable } from 'svelte/store';

export const navLinks = writable([]);

const links = ['Home', 'About', 'Work', 'Templates', 'Services', 'Contact'];

navLinks.set(links);
