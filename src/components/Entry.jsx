import React from 'react'

const Entry = ({ funcArray }) => {
    return (
        <div  
        style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`
            }}>


            <form onSubmit={funcArray.addBlog}>
                <div 
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                    }}>
                    <label for="bTitle">Blog Title: </label>
                    <input value={funcArray.newBlog} onChange={funcArray.handleBlogChange} size="50"/>
                    <label for="aName">Author Name: </label>
                    <input value={funcArray.newBlog} onChange={funcArray.handleBlogChange} size="50"/>
                </div>
                <br/>
                    <label for="content">Write a Blog!</label>
                <br/><br/>
                <textarea class="form-control" rows="2"
                    placeholder="What's on your mind?" style={{
                        width:"100%"
                    }} >
                </textarea>
            </form>
        </div>
    )
}

export default Entry