import React, { useState, useEffect } from 'react';
import mockPosts from './mockData';
import './BlogPosts.css';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Extract unique categories for the navbar
  const categories = Array.from(new Set(mockPosts.contents.map(post => post.category.name)));

  useEffect(() => {
    loadMorePosts();
  }, []);

  const loadMorePosts = () => {
    if (posts.length >= mockPosts.contents.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setPosts(prevPosts => [...prevPosts, ...mockPosts.contents.slice((page - 1) * 5, page * 5)]);
      setPage(prevPage => prevPage + 1);
    }, 1000);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
      return;
    }
    loadMorePosts();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div className="blog-container">
      <nav className="navbar">
        {categories.map((category, index) => (
          <a key={index} href="#" className="nav-link">{category}</a>
        ))}
      </nav>

      <h1 className="blog-header">Inked</h1>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="post">
            <a href="#" className="post-title">{post.title}</a>
            <p className="post-description">{post.description}</p>
            <p className="post-content">{post.content}</p>
            <div className="post-details">
              <a href="#" className="category">{post.category.name}</a>
              <a href="#"><strong>Author:</strong> {post.user}</a>
              <span><strong>Date:</strong> {new Date(post.dateCreated).toLocaleDateString()}</span>
            </div>
          </div>
        ))
      )}
      {!hasMore && <p style={{ textAlign: 'center' }}>No more posts to load.</p>}
    </div>
  );
};

export default BlogPosts;
