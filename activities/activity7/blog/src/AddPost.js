import React, { useState } from 'react';

function AddPost({ onAddPost }) {
  const [text, setText] = useState('');

  const handleClick = () => {
    if (text.trim() === '') return;
    onAddPost(text);
    setText('');
  };

  return (
    <div style={{ marginBottom: '20px', padding: '16px', border: '1px solid #ccc', borderRadius: '6px' }}>
      <h3>Add New Post</h3>
      <textarea
        rows="3"
        style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post here..."
      />
      <button
        onClick={handleClick}
        style={{ backgroundColor: '#0d6efd', color: 'white', border: 'none', padding: '8px 18px', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add Post
      </button>
    </div>
  );
}

export default AddPost;