import React, { useState } from 'react';
import './App.css';
import UserForm from '../src/components/UserForm';
import UserCard from '../src/components/UserCard';
import Header from '../src/components/Header';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <Header />
      <div className="app">
        <UserForm addUser={addUser} />
        <div className="card-container">
          {users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
