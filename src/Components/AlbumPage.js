import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AlbumPage.css";

function AlbumPage() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching photos for album ${albumId}:`, error);
      });
  }, [albumId]);

  return (
    <>
      <h2>Photos in Album</h2>
      <div className="page">
        {photos.map((photo) => (
          <Card style={{ width: "22rem" }} className="shadow-lg">
            <Card.Img
              variant="top"
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default AlbumPage;
