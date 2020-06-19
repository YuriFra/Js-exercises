(() => {
    document.getElementById('run').addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            if (error) {
                console.log("error");//null
            } else {
                console.log(articles);//randomly generated list of articles
            }
        })
    })
})();