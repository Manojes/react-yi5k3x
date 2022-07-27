import React from 'react';

const User = () => {
const addUserHandler=(event)=>{
event.preventDefault();
  }
  
  return (
    <div class="col-lg-offset-4" >

      <form onSubmit={addUserHandler}>
      <div class="p-2  col-md-6">
      <label class="p-1" htmlfor="username"> Username </label>
        <input class="form-control" id="username" type="text" />
      </div>

      <div class="p-2 col-md-6 ">
        <label class="p-1" htmlfor="age"> Age </label>
        <input class="form-control" id="age" type="text" />
      </div>

      <div onClick={} className="btn btn-primary"> button </div>

      </form>
    </div>
  );
};

export default User;
