import React from 'react';
import './styles.css';

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
    </div>
  );
}

export default BlogPost;
