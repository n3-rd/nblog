export const ssr = false;
export async function load({ url }) {
    return {
        currentPath: url.pathname,
    };
};