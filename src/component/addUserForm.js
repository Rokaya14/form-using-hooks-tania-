import React, { useState } from 'react';
const AddUserForm = (props) => {

  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)
  //console.log(user.name, "*****", user.username);

  const handelInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.username) return
    // console.log(user.name, "*****", user.username);
    props.addUser(user);

    setUser(initialFormState)

  }
  return (
    <form >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handelInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handelInputChange}
      />
      <button
        className="button accent-button"
        onClick={handelSubmit}
      >
        Add new user
      </button>
    </form>
  );
}

export default AddUserForm;