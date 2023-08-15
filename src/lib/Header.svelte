<script>
    import { theme } from "$lib/store.js";
    import { base } from "$app/paths";
</script>

<div
    class="w-full fixed h-14 flex justify-between items-center px-7 text-black dark:text-white bg-gray-50 dark:bg-gray-900 rounded-b-xl z-50"
>
    <a href="{base}/"><h1 class="title display text-base">N3rd's Blog.</h1></a>
    <div class="links flex gap-4">
        <a href="https://github.com/n3-rd" target="_blank" rel="noreferrer"
            ><div class="li">/github</div></a
        >
        <a href="mailto:godwinjdayo@gmail.com?subject=%5BFrom%20Blog%5D"
            ><div class="li">/email</div></a
        >
    </div>

    <div class="theme-toggler flex justify-between gap-5">
        {#if $theme == "light"}
            <button class="theme-selector" on:click={() => theme.set("dark")}>
                <div class="li">/dark-mode</div>
            </button>
        {:else}
            <button class="theme-selector" on:click={() => theme.set("light")}>
                <div class="li">/light-mode</div>
            </button>
        {/if}
    </div>
</div>
