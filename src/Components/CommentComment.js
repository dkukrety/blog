import { React, useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./comments.css";

const baseURL = "https://jsonplaceholder.typicode.com/comments";

function paginationComponent() {
  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30,
      }}
    >
      <h4>ReactJS Reactstrap Pagination Component</h4>
      <Pagination>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
}

function CommentCard(comment) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{comment.name}</Card.Title>
          <Card.Text>{comment.body}</Card.Text>
          <Button variant="primary">{comment.email}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const CommentComponent = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setpageSize] = useState(5);
  const [totalPages, settotalPages] = useState(5);

  const handlePageClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setComments(response.data);
      console.log(response.data);
      settotalPages(response.data.length / pageSize);
      console.log(totalPages);
    });
  }, []);

  if (!comments) return null;

  return (
    <>
      <div className="CommentLayout">
        {comments
          .slice(pageSize * currentPage, (currentPage + 1) * pageSize)
          .map((comment) => (
            <>{CommentCard(comment)}</>
          ))}
      </div>
      {
        <Pagination>
          {[...Array(totalPages)].map((page, i) => (
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink onClick={(e) => handlePageClick(e, i)} href="#">
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </Pagination>
      }
      {/* {paginationComponent()} */}
    </>
  );
};

export default CommentComponent;
