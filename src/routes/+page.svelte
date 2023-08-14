<script>
    export let data;
    import { base } from "$app/paths";
    const { articles } = data;
</script>

<svelte:head>
    <title>N3rd's Blog</title>
</svelte:head>
<div class="px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
        {#each articles as article (article.id)}
            <a href="{base}/articles/{article.id}" data-sveltekit-preload-data>
                <div
                    class="article w-full cursor-pointer hover:text-gray-800 transition-colors
                    dark:hover:text-gray-200
                    "
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
