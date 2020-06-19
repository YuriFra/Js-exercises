(() => {
    document.getElementById('run').addEventListener('click', () => {
        // use _ for a parameter that isn't used
        let getComment = (_, comments) => {
                console.table(comments);
            }

        let getArticle = (_, articles) => {
                articles.forEach(article => window.lib.getComments(article.id, getComment));
            }
        window.lib.getPosts(getArticle);
    })
})();

//Solution from Koen
(() => {
    document.querySelector('#run').addEventListener('click', () => {
        // (_, posts) is an anonymous function, because you call it only once
        window.lib.getPosts(
                (_, posts) => {
                    console.log(posts);
                    posts.forEach(post =>
                        window.lib.getComments(post.id, (_, comments) => {
                            post.comments = comments;
                            console.table(comments);
                        })
                    );
                });
    });
})();
