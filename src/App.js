import React, { useState } from 'react';
import './style.css';
import AddUser from './AddUser';

import UsersList from './UsersList';
export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage) => {
    setUsersList((prevUserlist) => {
      return [
        ...prevUserlist,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={[usersList]} />
    </div>
  );
}
