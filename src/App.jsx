import React from 'react';
import Blog from './components/Blog';
import Header from './components/Header';

function App() {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [likes, setLikes] = useState(0);
  const info = {
    title: 'The title of the Blog',
    author: 'Jacob Castiglioni',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };
  return (
    <div>
      <Header siteTitle="Jacob's Blog Site" />
      <Blog title={info.title} body={info.body} author={info.author} />
    </div>
  );
}

export default App;
