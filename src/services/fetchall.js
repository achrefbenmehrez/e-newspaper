export const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
export const key = 'kQgtCN8cxMaKlE64VM3TmCjPnGvTeUi5';
//export let url = baseURL + '?api-key=' + key + '&page=' + searchTerm.value + '&fq=document_type:("article")';

function fetchArticles() {
    let currentState = this.state.articles
    fetch(baseURL+'api-key='+key)
    .then((res) => res.json())
    .then((json) => this.setState({articles: [...currentState, json.response.docs]}));
  }

export default fetchArticles;