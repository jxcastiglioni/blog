import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ article, func }) => (
  
    <div
    style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
           <article>
    <h2>{article.title}</h2>
    <h6>{article.author}</h6>
   
    <p style={{
        textAlign:'justify'
    }}>
        {article.body}</p>
  </article>
  <button onClick={func} style={{float: "right"}}>Like <span role="img" aria-label="heart">❤️</span></button>
   </div>
);

Blog.propTypes = {
  // article: PropTypes.objectOf(PropTypes.string.isRequired)
  article: PropTypes.object
};

export default Blog;