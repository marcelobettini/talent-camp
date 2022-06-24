import { useState } from "react";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
import { Container } from "react-bootstrap"

function App() {
  const [postId, setPostId] = useState(null)
  return (
    <Container>
      <h1 className="mb-4">React-Query Demo</h1>
      {postId && (
        <div>
          <a onClick={() => setPostId(null)} href="#">
            Back
          </a>
        </div>
      )}
      {postId ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <div className="row gap-4">
          <div className="col-md">
            <NewPost />
          </div>
          <div className="col-md">
            <Posts setPostId={setPostId} />
          </div>
        </div>
      )}
    </Container>
  );
}

export default App

