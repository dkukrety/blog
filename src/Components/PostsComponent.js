import React, { useState, useEffect } from "react";
// import Post from './Post'
import { Button } from "reactstrap";

function PostsComponent() {
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      fetch("https://jsonplaceholder.typicode.com/posts") // Replace with your API URL
        .then((response) => response.json())
        .then((posts) => {
          debugger;
          setPosts(posts);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <>
      <div>
        <div>
          <Button color="info" onClick={handleClick}>
            Posts
          </Button>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <>
                <li key={post.userId}>{post.userId}</li>
                <li key={post.id}>{post.id}</li>
                <li key={post.title}>{post.title}</li>
                <li key={post.body}>{post.body}</li>
              </>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default PostsComponent;
