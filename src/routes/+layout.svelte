<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import { theme } from "$lib/store.js";
</script>

<Header />
<div class="pt-16 {$theme}">
  <slot />
</div>
