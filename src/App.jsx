import React, {useState, useEffect} from 'react';
import Blog from './components/Blog';
import Header from './components/Header';
//import Form from './components/Form'
import blogService from './services/blogs'



function App() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')
  const [blogs, setBlogs] = useState([])
  

  

  const hook = () => {
    blogService
        .getAll()
        .then(initialBlog => {
            setBlogs(initialBlog)
            
        })
}

useEffect(hook, [])

const handleTitleChange = (event) => {
  console.log(event.target.value);
  setTitle(event.target.value)
}

const handleAuthorChange = (event) => {
   console.log(event.target.value);
   setAuthor(event.target.value)
}

const handleBodyChange = (event) => {
   console.log(event.target.value);
   setBody(event.target.value)
}

const addBlog = (event) => {
   event.preventDefault()
   const blogObj = {
       id: blogs.length + 1,
       title: title,
       author: author,
       body: body
   }
   console.log('blog obj created')

   blogService
       .create(blogObj)
       .then(returnedBlog => {
           setBlogs(blogs.concat(returnedBlog))
           setBody('')
           setTitle('')
           setAuthor('')
       })  
   }

  return (
    <div>
      <Header siteTitle="Jacob's Blog Site" />
      <div  
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`
            }}>
            <form onSubmit={addBlog}>
                <div 
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                    }}>
                    <label> Blog Title: </label>
                    <input value={title} onChange={handleTitleChange} size="50"/>
                    <label> Author Name: </label>
                    <input value={author} onChange={handleAuthorChange} size="50"/>
                </div>
                <br/>
                    <label>Write a Blog!</label>
                <br/><br/>
                <textarea value={body} onChange={handleBodyChange} rows="2"
                    placeholder="What's on your mind?" style={{
                        width:"100%"
                    }} >
                </textarea>
                <br/><br/>
                <button type="submit" style={{
                    float:"right"
                }}>Submit</button>
            </form>
        </div>
        <div
        style={{
          flexDirection: 'column-reverse'
        }}>
      {blogs.map(art => <Blog key={art.id} article={art} />)}
      </div>
    </div>
  );
}

export default App;
