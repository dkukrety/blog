import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

function PhotoComponent() {
  const { albumId } = useParams();
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photo data:", error);
      });
  }, [albumId]);

  if (!photoData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {photoData.map((photo) => (
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <li key={photo.id}>
                <Image src={photo.thumbnailUrl} rounded alt={photo.title} />
                {photo.title}
              </li>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default PhotoComponent;
