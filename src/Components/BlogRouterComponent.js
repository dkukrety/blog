import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostsComponent from "./PostsComponent";
import UsersComponent from "./UsersComponent";
import CommentComponent from "./CommentComment";
import BlogLayout from "./BlogLayout";
import PhotoComponent from "./PhotoComponent";
import AlbumComponent from "./AlbumComponent";
import AlbumPage from "./AlbumPage";

const BlogComponentRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogLayout />}>
          <Route path="/posts" element={<PostsComponent />} />
          <Route path="/users" element={<UsersComponent />} />
          <Route path="/comments" element={<CommentComponent />} />
          <Route path="/photos" element={<PhotoComponent />} />
          <Route path="/photos" element={<PhotoComponent />} />
          <Route path="/albums" element={<AlbumComponent />} />
          <Route path="/album/:albumId" element={<AlbumPage />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default BlogComponentRouter;
