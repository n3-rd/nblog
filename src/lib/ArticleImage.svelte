<script>
    export let coverImage;
    export let title;
    export let id;
</script>

<div class="article-image-container w-full flex justify-center pt-5">
    <div class="article-image w-[87%] md:w-[60%] h-[24rem]">
        <img
            src={coverImage}
            alt={title}
            class="w-full h-full object-cover object-center rounded-xl article-cover"
            style:--tag="article-{id}"
        />
    </div>
</div>

<style type="text/css">
    img {
        view-transition-name: var(--tag);
    }
</style>
