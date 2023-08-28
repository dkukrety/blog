import React, { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
// import './Posts.css'

function PostsComponent() {
    const [posts, setPosts] = useState([])

    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      fetch('https://jsonplaceholder.typicode.com/posts') // Replace with your API URL
        .then(response => response.json())
        .then(posts => {
            setPosts(posts);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <>
        <div className='container'>
            <div>
                <Button color="info" onClick={handleClick}>Posts</Button>
            </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (

        <div className='d-flex flex-row flex-wrap '>
          {posts.map((post, index) => (
          
            <Card key = {index} className='w-25'>
              <CardBody>
                <CardTitle tag="h5"><li key={post.title}>{post.title}</li></CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6"><li key={post.id}>{post.id}</li></CardSubtitle>
              </CardBody>
              <img alt="Card cap" src="https://picsum.photos/318/180" width="100%"/>
              <CardBody>
                <CardText><li key={post.body}>{post.body}</li></CardText>
              </CardBody>
            </Card>
              
              
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default PostsComponent