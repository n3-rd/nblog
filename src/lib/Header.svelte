<script>
    import { theme } from "$lib/store.js";
    import { base } from "$app/paths";
</script>

<div
    class="w-full fixed h-14 flex justify-between items-center px-7 text-black dark:text-white bg-gray-50 dark:bg-gray-900 rounded-b-xl z-50"
>
    <a href="{base}/"><div class="title display">N3rd's Blog.</div></a>
    <div class="links flex justify-between gap-5">
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
