import { useState } from "react";
import NewPost from "../new-post/new-post";
import Post from "./post";
import classes from "./post-list.module.css";
import Modal from "../modal/modal";

function PostList() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggedPostIndex, setDraggedPostIndex] = useState(null);

  // Open and close modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Form submission handler
  const handlePostSubmit = () => {
    if (author && content) {
      setPosts((prevPosts) => [...prevPosts, { author, content }]);
      setAuthor("");
      setContent("");
      closeModal(); 
    }
  };

  // Drag and Drop Handlers
  const handleDragStart = (index) => {
    setDraggedPostIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop by preventing default behavior
  };

  const handleDrop = (index) => {
    if (draggedPostIndex !== null && draggedPostIndex !== index) {
      const reorderedPosts = [...posts];
      const [draggedPost] = reorderedPosts.splice(draggedPostIndex, 1);
      reorderedPosts.splice(index, 0, draggedPost);
      setPosts(reorderedPosts);
    }
    setDraggedPostIndex(null);
  };

  return (
    <>
      <button onClick={openModal}>Create New Post</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewPost
            author={author}
            content={content}
            onChangeAuthor={(e) => setAuthor(e.target.value)}
            onChangeContent={(e) => setContent(e.target.value)}
            onSubmit={handlePostSubmit}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <li
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className={classes.draggablePost}
            >
              <Post author={post.author} content={post.content} />
            </li>
          ))
        ) : (
          <p>No posts yet. Be the first to add one!</p>
        )}
      </ul>
    </>
  );
}

export default PostList;
