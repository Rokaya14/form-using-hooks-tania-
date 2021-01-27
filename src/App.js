import React, { useState } from 'react';
import UserTable from './Table';
const App = () => {

  const usersData = [
    { id: 1, name: "rokaya", username: "rokaya@yahoo" },
    { id: 2, name: "maria", username: "marya@yahoo" },
    { id: 3, name: "nada", username: "nada@yahoo" }
  ]
  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1> CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;