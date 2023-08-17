<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import { theme } from "$lib/store.js";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import Analytics from "$lib/Analytics.svelte";
  import { fly } from "svelte/transition";

  export let data;

  inject({ mode: dev ? "development" : "production" });
</script>

<Analytics />
<div class="{$theme} transition-colors min-h-screen">
  <Header />
  {#key data.currentPath}
    <div class="pt-16">
      <div
        in:fly={{ y: -30, duration: 200, delay: 150 }}
        out:fly={{ y: -30, duration: 150 }}
      >
        <slot />
      </div>
    </div>
  {/key}
</div>
