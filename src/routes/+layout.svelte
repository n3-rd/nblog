<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import { theme } from "$lib/store.js";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import Analytics from "$lib/Analytics.svelte";

  inject({ mode: dev ? "development" : "production" });
</script>

<Analytics />
<div class="{$theme} transition-colors min-h-screen">
  <Header />
  <div class="pt-16">
    <slot />
  </div>
</div>
