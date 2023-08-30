import { Outlet, Link } from "react-router-dom";

const BlogLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Posts">Posts</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/Album">Album Page</Link>
          </li>
          <li>
            <Link to="/Photos">Photos</Link>
          </li>
          <li>
            <Link to="/Albums">Albums</Link>
          </li>
          <li>
            <Link to="/Comments">Comments</Link>
          </li>
        </ul>
      </nav>
      <div className="m-10">
        <h1>Out of above is shown below</h1>
      </div>
      <Outlet />
    </>
  );
};

export default BlogLayout;
