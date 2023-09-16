<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import { theme } from "$lib/store.js";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import Analytics from "$lib/Analytics.svelte";

  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  export let data;

  inject({ mode: dev ? "development" : "production" });
</script>

<Analytics />
<div class="{$theme} transition-colors min-h-screen">
  <Header />
  {#key data.currentPath}
    <div class="pt-16">
      <div>
        <slot />
      </div>
    </div>
  {/key}
</div>
