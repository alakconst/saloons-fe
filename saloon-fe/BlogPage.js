// BlogPage.js
// This page will be inside src file.
import React from 'react';
import BlogPost from './BlogPost';

const blogPosts = [
  // Your blog post data here
];

function BlogPage() {
  return (
    <div className="blog-page">
      <h1>Our Blog</h1>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogPage;
