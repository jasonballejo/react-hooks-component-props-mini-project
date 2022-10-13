import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    // console.log(posts)

    const articles = posts.map((articles) => {
        return <Article key={articles.id} title={articles.title} date={articles.date} preview={articles.preview}/>
    })

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList