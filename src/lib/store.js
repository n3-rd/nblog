import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const storedTheme = browser ? window.localStorage.getItem("theme") : null;
export const theme = writable(storedTheme)
theme.subscribe(value => {
    if (browser) {
        window.localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
    }
})