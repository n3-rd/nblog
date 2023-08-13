<script>
    import { page } from "$app/stores";
</script>

<div class="min-h-screen">
    <div class="h1 text-center text-7xl">An error occoured</div>
    <div
        class="error-image-container w-full flex justify-center items-center py-4"
    >
        <div class="error-image">
            <img src="/img/no-evidence.webp" alt="error" />
        </div>
    </div>

    <div class="p text-center">
        {$page.error.message}
    </div>
</div>

<style>
    img {
        width: 20rem;
        height: 20rem;
        object-fit: cover;
        object-position: center;
    }
</style>
