import React, { useState } from 'react';

const User = () => {
  const [enteredUsername, setenteredUsername] = useState('');
  const [enteredage, setenteredage] = useState('');

  const addUserHandler = (event) => {
    console.log('dsfs');
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredage.trim().length === 0) {
      return;
    }

    if (+enteredage < 1) {
      return;
    }

    console.log(enteredUsername, enteredage);
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
    <div className="col-lg-offset-4">
      <form onSubmit={addUserHandler}>
        <div className="p-2  col-md-6">
          <label className="p-1" htmlFor="username">
            Usernamew
          </label>
          <input
            className="form-control"
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUsername}
          />
        </div>

        <div className="p-2 col-md-6 ">
          <label className="p-1" htmlFor="age">
            Age
          </label>
          <input
            className="form-control"
            id="age"
            type="number"
            onChange={ageHandler}
            value={enteredage}
          />
        </div>

        <button type="submit" className="btn btn-primary"> submit
       </button>
          
      </form>
    </div>
  );
};

export default User;
