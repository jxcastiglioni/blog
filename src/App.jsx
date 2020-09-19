import React, {useState, useEffect} from 'react';
import Blog from './components/Blog';
import Header from './components/Header';
import Form from './components/Form'
import blogService from './services/blogs'


function App() {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [body, setBody] = useState('');
  // const [likes, setLikes] = useState(0);
  const [blogs, setBlogs] = useState([])
  const hook = () => {
    blogService
        .getAll()
        .then(initialBlog => {
            setBlogs(initialBlog)
        })
}



useEffect(hook, [])

  return (
    <div>
      <Header siteTitle="Jacob's Blog Site" />
      <Form />
      {blogs.map(art => <Blog key={art.id} article={art} />)}
    </div>
  );
}

export default App;
