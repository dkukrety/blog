import React, { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


function PostsComponent() {
    const [posts, setPosts] = useState([])

    const [isLoading, setIsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12;

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
        <>
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

        <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={posts.length < postsPerPage}
        >
          Next
        </button>
      </div>
        </>
       
        
      )}
    </div>
    <div className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
          <button key={index} className={index + 1 === currentPage ? 'active' : ''} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default PostsComponent