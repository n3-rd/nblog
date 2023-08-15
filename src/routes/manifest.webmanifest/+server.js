import website from '$lib/config/website';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export const GET = function get({ setHeaders }) {
    const { backgroundColor, description, siteShortTitle, siteTitle, themeColor } = website;

    const manifest = {
        name: siteTitle,
        short_name: siteShortTitle,
        description,
        start_url: '/',
        background_color: backgroundColor,
        theme_color: themeColor,
        display: 'standalone',
        icons: [
            { "src": "/icons/favicon.ico", "type": "image/x-icon", "sizes": "16x16 32x32" },
            { "src": "/icons/icon-192.png", "type": "image/png", "sizes": "192x192" },
            { "src": "/icons/icon-512.png", "type": "image/png", "sizes": "512x512" },
            { "src": "/icons/icon-192-maskable.png", "type": "image/png", "sizes": "192x192", "purpose": "maskable" },
            { "src": "/icons/icon-512-maskable.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
        ],
    };

    setHeaders({
        'content-type': 'application/json',
    });

    return new Response(JSON.stringify(manifest));
};