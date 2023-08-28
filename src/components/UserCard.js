import React from 'react';
import '../styles/UserCard.css';

const UserCard = ({ user }) => {
  return (
    <>
      <div className='user'>
        <div className="user-card">
          <h3>{user.name}</h3>
          <p>Reg No: {user.regNo}</p>
          <p>Subject Code: {user.subjectCode}</p>
          <p>Date: {user.date}</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
