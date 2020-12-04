// Defining a baseURL and key to as part of the request URL
  
export const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
export const key = 'kQgtCN8cxMaKlE64VM3TmCjPnGvTeUi5';
export let url;

// Grab references to all the DOM elements you'll need to manipulate
export const searchTerm = document.querySelector('.search'); 
export const startDate = document.querySelector('.start-date'); 
export const endDate = document.querySelector('.end-date');

export function fetchSomeResults(e) {
// Assemble the full URL
url = baseURL + '?api-key=' + key + '&page=' + searchTerm.value + '&fq=document_type:("article")';

if(startDate.value !== '') {
  url += '&begin_date=' + startDate.value;
};

if(endDate.value !== '') {
  url += '&end_date=' + endDate.value;
};
// Use fetch() to make the request to the API
fetch(url).then(function(result) {
return result.json();
})
};