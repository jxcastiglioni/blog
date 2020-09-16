import React, {useState} from 'react'
// import info from '../data'

const Entry = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [article, setArticle] = useState('')

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

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit button pressed');
    }

    // const addBlog = (event) => {
    //     event.preventDefault()
    //     const blogObj = {
    //         id: 3,
    //         author: author,
    //         title: title,
    //         article: article
    //     }
    // }

    return (
        <div  
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`
            }}>
            <form onSubmit={handleSubmit}>
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

export default Entry