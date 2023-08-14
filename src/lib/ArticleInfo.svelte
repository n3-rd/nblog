<script>
    export let title;
    export let username;
    export let published;
    export let ttr;
</script>

<h1 class="text-center text-3xl md:text-5xl px-4 md:px-24 py-3 font-black">
    {title}
</h1>
<div class="article-authout py-4 text-center">
    by <a href="http://dev.to/{username}" target="_blank" rel="noreferrer"
        >{username}</a
    >
</div>
<div class="article-info flex justify-center items-center gap-4">
    <div class="publish-date">
        Published on {published.split("T")[0]}
    </div>
    <div class="ttr">{ttr} mins read</div>
</div>
