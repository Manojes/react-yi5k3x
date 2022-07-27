import React from 'react';

const User = () => {
  return (
    <div>
      <label htmlfor="username"> Username </label>
      <input class="form-control" id="username" type="text" />

      <label htmlfor="age"> Age </label>
      <input class="form-control" id="age" type="text" />
    </div>
  );
};

export default User;
