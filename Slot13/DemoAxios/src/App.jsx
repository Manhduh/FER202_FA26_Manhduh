import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import PatchPost from './components/PatchPost';

function App() {
  return (
    <div className="app-wrapper">
      <div className="container py-4">
        <h1 className="text-center mb-4">DemoAxios</h1>

        <div className="demo-section">
          <PostList />
        </div>

        <div className="demo-section">
          <CreatePost />
        </div>

        <div className="demo-section">
          <UpdatePost />
        </div>

        <div className="demo-section">
          <PatchPost />
        </div>
      </div>
    </div>
  );
}

export default App;
