import React from 'react';
import Blog from './components/Blog';
import Header from './components/Header';
import Entry from './components/Entry'
import info from './data'

function App() {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [body, setBody] = useState('');
  // const [likes, setLikes] = useState(0);


  return (
    <div>
      <Header siteTitle="Jacob's Blog Site" />
      <Entry />
      {info.map(art => <Blog key={art.id} article={art} />)}
    </div>
  );
}

export default App;
