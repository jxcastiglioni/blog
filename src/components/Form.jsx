import React, {useState, useEffect} from 'react'
import blogService from '../services/blogs'
//import info from '../data'

const Form = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [article, setArticle] = useState('')
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

    const handleArticleChange = (event) => {
        console.log(event.target.value);
        setArticle(event.target.value)
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log('submit button pressed');
    // }

    const addBlog = (event) => {
        event.preventDefault()
        const blogObj = {
            id: 5,
            title: title,
            author: author,
            body: article
        }
        console.log('blog obj created')

        blogService
            .create(blogObj)
            .then(returnedBlog => {
                setBlogs(blogs.concat(returnedBlog))
                setArticle('')
                setTitle('')
                setAuthor('')
            })  
        }

    return (
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
                <textarea value={article} onChange={handleArticleChange} rows="2"
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
    )
}

export default Form