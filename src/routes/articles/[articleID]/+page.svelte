<script>
    import ArticleContent from "$lib/ArticleContent.svelte";
    import ArticleImage from "$lib/ArticleImage.svelte";
    import ArticleInfo from "$lib/ArticleInfo.svelte";

    export let data;
    const { article } = data;
</script>

<svelte:head>
    <title>{article.title}</title>
    <!-- image -->
    <meta property="og:image" content={article.cover_image} />
    <meta name="twitter:image" content={article.social_image} />
    <!-- description -->
    <meta name="description" content={article.description} />
    <meta property="og:description" content={article.description} />
    <meta name="twitter:description" content={article.description} />
    <!-- title -->
    <meta property="og:title" content={article.title} />
    <meta name="twitter:title" content={article.title} />
    <!-- url -->
    <meta property="og:url" content={window.location.href} />
    <meta name="twitter:url" content={window.location.href} />
    <!-- type -->
    <meta property="og:type" content="article" />
    <!-- canonical url -->
    <meta
        property="og:article:published_time"
        content={article.published_timestamp}
    />
</svelte:head>
<ArticleImage coverImage={article.cover_image} title={article.title} />
<ArticleInfo
    title={article.title}
    username={article.user.username}
    published={article.published_timestamp}
    ttr={article.reading_time_minutes}
/>
<ArticleContent content={article.body_html} />
