import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AlbumComponent.css";

function AlbumComponent() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);

  return (
    <>
      <h2>Albums</h2>
      <div className="album">
        {albums.map((album) => (
          <div key={album.id}>
            <Card style={{ width: "18rem" }} className="shadow-lg">
              <Card.Body>
                <Card.Title>{album.title}</Card.Title>
                <Card.Text>
                  <Link to={`/album/${album.id}`}>
                    <Button variant="primary">Open the Album</Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default AlbumComponent;
