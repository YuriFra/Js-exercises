(() => {
    (() => {
        document.querySelector('#run').addEventListener('click', () => {
            async function processComments(postId) {
                let comments = await window.lib.getComments(postId);
                console.log(postId, comments);
            }

            async function processPosts() {
                let posts = await window.lib.getPosts();
                posts.forEach((post) => {
                    processComments(post.id);
                });
            }
            processPosts();
        })
    })();
})();
