<script>
    export let content;
    import hljs from "highlight.js";
    import "highlight.js/styles/hybrid.css";
    import { onMount } from "svelte";
    import DOMPurify from "isomorphic-dompurify";
    let articleContent = content;
    hljs.configure({ ignoreUnescapedHTML: true });
    onMount(() => {
        const content = document.querySelector(".content");
        hljs.highlightAll();

        content.querySelectorAll(".js-actions-panel").forEach((panel) => {
            panel.remove();
        });
        content.querySelectorAll("a").forEach((link) => {
            link.setAttribute("target", "_blank");
        });
    });
</script>

<div class="content px-16 py-3">
    {@html DOMPurify.sanitize(articleContent)}
</div>
