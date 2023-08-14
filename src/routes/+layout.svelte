<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import { theme } from "$lib/store.js";
</script>

<div class="{$theme} transition-colors min-h-screen">
  <Header />
  <div class="pt-16">
    <slot />
  </div>
</div>
