import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App() {
  const [postList, setPostList] = useState([
    { postId: 1, postText: 'My first blog post about React!' },
    { postId: 2, postText: 'Learning about dynamic components today.' },
    { postId: 3, postText: 'State management is really powerful.' },
  ]);
  const [postId, setPostId] = useState(4);

  const handleDeletePost = (id) => {
    const updatedPostList = postList.filter((post) => post.postId !== id);
    setPostList(updatedPostList);
  };

  const handleAddPost = (text) => {
    const newPost = { postId: postId, postText: text };
    setPostList((currentList) => [...currentList, newPost]);
    setPostId(postId + 1);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Blog Posts</h1>
      <AddPost onAddPost={handleAddPost} />
      {postList.map((post) => (
        <Post
          key={post.postId}
          post={post}
          onDelete={handleDeletePost}
        />
      ))}
    </div>
  );
}

export default App;
