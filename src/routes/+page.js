export const load = async ({ fetch }) => {
    // add headers

    const articlesRes = await fetch('https://dev.to/api/articles?username=n3rd')
    const articlesData = await articlesRes.json();
    return {
        headers: {
            'cache-control': 'public, max-age=3600'
        },
        articles: articlesData
    }
}