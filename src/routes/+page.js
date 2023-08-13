export const load = async ({ fetch }) => {
    const articlesRes = await fetch('https://dev.to/api/articles?username=n3rd')
    const articlesData = await articlesRes.json();
    return {
        articles: articlesData
    }
}