import React, { useState } from 'react';
import '../styles/UserForm.css';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && regNo && subjectCode && date) {
      addUser({ name, regNo, subjectCode, date });
      setName('');
      setRegNo('');
      setSubjectCode('');
      setDate('');
    }
  };

  return (
    <>
      <div className='forms'>
        <div className="form-container">
          <h1>User Registration</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Registration Number" value={regNo} onChange={(e) => setRegNo(e.target.value)} required />
            <input type="text" placeholder="Subject Code" value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
