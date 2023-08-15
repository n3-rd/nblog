<script>
    import Comment from "$lib/Comment.svelte";
    export let comments;
    export let article;
</script>

{#if comments.length === 0}
    <div class="comments-section py-14 px-16">
        <h3 class="text-6xl py-4">Comments</h3>
        <div class="info">No comments yet</div>
    </div>
{:else}
    <!-- comments section-->
    <div class="comments-section py-14 px-16">
        <h3 class="text-6xl py-4">Comments</h3>
        <div class="info">
            Go to <a
                href={article.url}
                class="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer">The post URL</a
            > to comment
        </div>
        <div class="comment py-4">
            {#each comments as comment}
                <Comment
                    thumbnail={comment.user.profile_image_90}
                    username={comment.user.username}
                    date={comment.created_at}
                    body={comment.body_html}
                />
                {#each comment.children as child}
                    <div class="comment py-3 pl-6">
                        <Comment
                            thumbnail={child.user.profile_image_90}
                            username={child.user.username}
                            date={child.created_at}
                            body={child.body_html}
                        />
                    </div>
                {/each}
            {/each}
        </div>
    </div>
{/if}
