import React from 'react';
import './Post.css';

function Post({ post, onDelete }) {
  return (
    <div className="post">
      <p>{post.postText}</p>
      <button onClick={() => onDelete(post.postId)}>Delete</button>
    </div>
  );
}

export default Post;