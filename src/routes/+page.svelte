<script>
    export let data;
    import { base } from "$app/paths";
    $: articles = data.articles;
</script>

<svelte:head>
    <title>N3rd's Blog</title>
</svelte:head>
{#key articles}
    <div class="px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
            {#each articles as article (article.id)}
                <a
                    href="{base}/articles/{article.id}"
                    data-sveltekit-preload-data
                >
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
                                    style:--tag="article-{article.id}"
                                />
                            {:else}
                                <div
                                    class="w-full h-full bg-gray-200 rounded-xl"
                                />
                            {/if}
                        </div>
                        <div class="article-title py-2">
                            <h1
                                class="article-header"
                                style:--article-header="article-{article.slug}"
                            >
                                {article.title}
                            </h1>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
{/key}

<style type="text/css">
    img {
        view-transition-name: var(--tag);
    }
    .article-header {
        view-transition-name: var(--article-header);
    }
</style>
