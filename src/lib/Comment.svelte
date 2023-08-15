<script>
    import DOMPurify from "isomorphic-dompurify";

    export let thumbnail;
    export let username;
    export let date;
    export let body;
</script>

<div class="comment pb-5">
    <div class="comment-header flex justify-between">
        <div class="flex gap-3 items-center pb-3">
            <div class="comment-user-thumbnail h-14 w-h-14 rounded-full">
                <img
                    src={thumbnail}
                    class="h-full w-full rounded-full"
                    alt="user thumbnail"
                />
            </div>
            <div class="comment-author">
                <p class="text-2xl">{username}</p>
            </div>
        </div>

        <div class="comment-date">
            <p class="text-gray-500">
                {date.split("T")[0]}
            </p>
        </div>
    </div>
    <div class="comment-body prose">
        <p class="text-xl">{@html DOMPurify.sanitize(body)}</p>
    </div>
</div>
