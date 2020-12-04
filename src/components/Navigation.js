import './Navigation.css';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Navigation({ getQuery }) {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="world.html">World</a></li>
            <li><a href="us.html">US</a></li>
            <li><a href="politics.html">Politics</a></li>
            <li><a href="tech.html">Tech</a></li>
            <li><a href="science.html">Science</a></li>
            <li><a href="health.html">Health</a></li>
            <li><a href="sports.html">Sports</a></li>
            <li><a href="arts.html">Arts</a></li>
            <li><a href="books.html">Books</a></li>
            <li><a href="food.html">Food</a></li>
            <li><a href="travel.html">Travel</a></li>
            <li><a href="search.html">Search article by date</a></li>
            <div className="topnav-right">
              <TextField type="text" 
              onChange={(e) => onChange(e.target.value)}
              value={text}
              label="search"
              placeholder="type a search query"
              />
              <Button 
              variant='contained' 
              type="submit"
              ><i className="fa fa-fw fa-search"></i></Button>
            </div>
          </ul>
    </div>
  );
}

export default Navigation;
