import React from 'react';

const UsersList = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        <li key={user.id}>
          {user.name}
          {user.age} years old
        </li>
      })}
    </div>
  );
};
export default UsersList;
