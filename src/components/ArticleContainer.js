import Article from './Article';

function ArticleContainer({ articles, isLoading }) {

  return (isLoading ? (<h1>Loading...</h1>):(<section className="cards">
    {articles.map(article => (
      <Article key={article._id} article={article}></Article>
    ))}
  </section> 
  ))
}

export default ArticleContainer;