<script>
    export let coverImage;
    export let title;
</script>

<div class="article-image-container w-full flex justify-center pt-5">
    <div class="article-image w-[60%] h-[24rem]">
        <img
            src={coverImage}
            alt={title}
            class="w-full h-full object-cover object-center rounded-xl"
        />
    </div>
</div>
