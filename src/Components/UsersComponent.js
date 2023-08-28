import { React, useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;

  return (
    <div>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default UsersComponent;
