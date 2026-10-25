import PostList from './PostList';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import PatchPost from './PatchPost';
import DeletePost from './DeletePost';
import RequestConfig from './RequestConfig';

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Slot 14 - Lab 6</h1>
      <PostList />
      <CreatePost />
      <UpdatePost />
      <PatchPost />
      <DeletePost />
      <RequestConfig />
    </div>
  );
}
