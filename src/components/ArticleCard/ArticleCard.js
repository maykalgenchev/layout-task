const ArticleCard = ({ article }) => {
    return (<>
        <div className="card">
            <img className="img" src={article.image} alt="Avatar" />
            <div><p className="header"><b>{article.title}</b></p></div>
            <div><p className="excerpt">{article.excerpt}</p></div>
            <div><p className="category">{`| ${article.category}`}</p></div>

        </div>
    </>
    );
}

export default ArticleCard;