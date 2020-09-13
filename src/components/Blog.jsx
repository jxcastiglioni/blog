import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ title, body, author }) => (
 
    <div
    style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
           <article>
    <h2>{title}</h2>
    <h6>{author}</h6>
   
    <p style={{
        textAlign:'justify'
    }}>
        {body}</p>
  </article>
   </div>
);

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Blog;