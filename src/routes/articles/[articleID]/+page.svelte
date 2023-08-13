<script>
    import ArticleContent from "$lib/ArticleContent.svelte";

    export let data;
    const { article } = data;
</script>

<div class="article-image-container w-full flex justify-center pt-5">
    <div class="article-image w-[60%] h-[24rem]">
        <img
            src={article.cover_image}
            alt={article.title}
            class="w-full h-full object-cover object-center rounded-xl"
        />
    </div>
</div>

<h1 class="text-center text-5xl px-24 py-3 font-black">{article.title}</h1>
<div class="article-authout py-4 text-center">
    by {article.user.username}
</div>
<div class="article-info flex justify-center items-center gap-4">
    <div class="publish-date">
        Published on {article.published_timestamp.split("T")[0]}
    </div>
    <div class="ttr">{article.reading_time_minutes} mins read</div>
</div>
<div class="article-content px-9">
    <ArticleContent content={article.body_html} />
</div>
