export const load = ({ fetch, params }) => {
    const fetchArticle = async (id) => {
        const res = await fetch(`https://dev.to/api/articles/${id}`)
        const data = await res.json();
        return data;
    }
    return {
        article: fetchArticle(params.articleID)
    }
}