import React, { useState } from 'react';

const User = () => {
  const [enteredUsername, setenteredUsername] = useState('');
  const [enteredage, setenteredage] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    setenteredUsername('');
    setenteredage('');
  };

  const userNameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setenteredage(event.target.value);
  };

  return (
    <div class="col-lg-offset-4">
      <form onSubmit={addUserHandler}>
        <div class="p-2  col-md-6">
          <label class="p-1" htmlfor="username">
            {' '}
            Username{' '}
          </label>
          <input
            class="form-control"
            id="username"
            type="text"
            onchange={userNameChangeHandler}
          />
        </div>

        <div class="p-2 col-md-6 ">
          <label class="p-1" htmlfor="age">
            {' '}
            Age{' '}
          </label>
          <input
            class="form-control"
            id="age"
            type="text"
            onchange={ageHandler}
          />
        </div>

        <div className="btn btn-primary"> button </div>
      </form>
    </div>
  );
};

export default User;
