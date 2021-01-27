import React, { useState } from 'react';
import UserTable from './Table';
import AddUserForm from './addUserForm';
const App = () => {

  const usersData = [
    { id: 1, name: "rokaya", username: "rokaya@yahoo" },
    { id: 2, name: "maria", username: "marya@yahoo" },
    { id: 3, name: "nada", username: "nada@yahoo" }
  ]
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id) //return all except user that want to delete 
    setUsers(newUsers);
  }

  return (
    <div className="container">
      <h1> CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;