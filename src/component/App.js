import React, { useState } from 'react';
import UserTable from './Table';
import AddUserForm from './addUserForm';
import EditUserForm from './updateUser';

const App = () => {

  const usersData = [
    { id: 1, name: "rokaya", username: "rokaya@yahoo" },
    { id: 2, name: "maria", username: "marya@yahoo" },
    { id: 3, name: "nada", username: "nada@yahoo" }
  ]
  const [users, setUsers] = useState(usersData)

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id) //return all except user that want to delete 
    setUsers(newUsers);
  }
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1> CRUD App with Hooks</h1>
      <div className="flex-row">

        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }


        </div>


        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;