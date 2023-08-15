export const load = ({ fetch, params }) => {
    const fetchArticle = async (id) => {
        const res = await fetch(`https://dev.to/api/articles/${id}`)
        const data = await res.json();
        return data;
    }
    const fetchComments = async (id) => {
        const res = await fetch(`https://dev.to/api/comments?a_id=${id}`)
        const data = await res.json();
        return data;
    }
    return {
        article: fetchArticle(params.articleID),
        comments: fetchComments(params.articleID)
    }
}