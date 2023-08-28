import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsComponent from "./PostsComponent";
import UsersComponent from "./UsersComponent";
import CommentComponent from "./CommentComment";
import BlogLayout from "./BlogLayout";

const BlogComponentRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogLayout />}>
          <Route path="Posts" element={<PostsComponent />} />
          <Route path="Users" element={<UsersComponent />} />
          <Route path="Comments" element={<CommentComponent />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BlogComponentRouter;
