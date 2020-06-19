(() => {
    document.querySelector('#run').addEventListener('click', () => {
        async function processPosts () {
            let posts = await window.lib.getPosts();
            console.table('posts', posts)
            return posts;
        }
        let posts = processPosts();
        console.log(posts);
    })
})();