<script>
    export let data;
    const { articles } = data;
</script>

<div class="w-screen px-4">
    <div class="grid grid-cols-3 gap-x-4 gap-y-5">
        {#each articles as article (article.id)}
            <div class="article w-full">
                <div class="article-image w-full h-[16rem]">
                    <img
                        class="w-full h-full object-cover object-center rounded-xl"
                        src={article.cover_image}
                        alt="article"
                    />
                </div>
                <div class="article-title">
                    <h2>
                        {article.title}
                    </h2>
                </div>
            </div>
        {/each}
    </div>
</div>
