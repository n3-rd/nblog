<script>
    export let data;
    const { articles } = data;
</script>

<div class="px-4">
    <div class="grid grid-cols-3 gap-x-4 gap-y-5">
        {#each articles as article (article.id)}
            <a href="/articles/{article.id}" data-sveltekit-preload-data>
                <div
                    class="article w-full cursor-pointer hover:text-gray-800 transition-colors"
                >
                    <div class="article-image w-full h-[16rem]">
                        {#if article.cover_image}
                            <img
                                class="w-full h-full object-cover object-center rounded-xl hover:opacity-80 transition-opacity"
                                src={article.cover_image}
                                alt="article"
                            />
                        {:else}
                            <div class="w-full h-full bg-gray-200 rounded-xl" />
                        {/if}
                    </div>
                    <div class="article-title py-2">
                        <h2>
                            {article.title}
                        </h2>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>
