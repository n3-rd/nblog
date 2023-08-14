<script>
    import ArticleContent from "$lib/ArticleContent.svelte";
    import ArticleImage from "$lib/ArticleImage.svelte";
    import ArticleInfo from "$lib/ArticleInfo.svelte";

    export let data;
    const { article } = data;
</script>

<svelte:head>
    <title>{article.title}</title>
</svelte:head>
<ArticleImage coverImage={article.cover_image} title={article.title} />
<ArticleInfo
    title={article.title}
    username={article.user.username}
    published={article.published_timestamp}
    ttr={article.reading_time_minutes}
/>
<ArticleContent content={article.body_html} />
