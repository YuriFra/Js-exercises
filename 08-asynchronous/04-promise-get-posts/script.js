(() => {
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts()
            .then((articles) => console.table(articles))
    })
})();

/*
(() => {
    document.getElementById('run').addEventListener('click',()=>{
        const logArticles = (articles) => console.table(articles);
        window.lib.getPosts().then(logArticles);
    })
})();*/
