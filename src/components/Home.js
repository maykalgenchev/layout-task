import { data } from "../data/data.js"
import ArticleCard from "../components/ArticleCard/ArticleCard.js"

const Home = () => {
    console.log(data);
    return (
        <body>
            <div className="cards">
                {data.map(x => <ArticleCard key={x.id} article={x} />)}
            </div>
        </body>
    );
}

export default Home;