import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ article }) => (
  
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
   </div>
);

Blog.propTypes = {
  // article: PropTypes.objectOf(PropTypes.string.isRequired)
  article: PropTypes.object
};

export default Blog;