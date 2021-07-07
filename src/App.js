import './App.css';
import ArticleContainer from './components/ArticleContainer';
import Navigation from './components/Navigation';
import Container from '@material-ui/core/Container';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [articles,setArticles] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [query,setQuery] = useState('');

  useEffect(() =>{
    const fetchArticles = async () =>{
      let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.REACT_APP_API_KEY}`;
      if(query !== ''){
        url+= `&q=+{query}`;
      }
      const result = await axios(url);
      //console.log(result.data.response.docs);
      setArticles(result.data.response.docs);
      setIsLoading(false);
    }
    fetchArticles();
  },[articles,query])
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Navigation getQuery={(q) => setQuery(q)}/>
        <ArticleContainer articles={articles} isLoading={isLoading}/>
      </Container>
    </div>
  );
}

export default App;
