import React, { useState } from 'react';
import Form from './components/Form'
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMember, setTeamMembers] = useState([
    {
      id: Date.now(),
      name: '',
      email: '',
      role: ' '
    }
  ])

  const addTeamMember = (newTeamMember) => {
    setTeamMembers([...teamMember, newTeamMember])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form addTeamMember={addTeamMember} />
      </header>
    </div>
  );
}

export default App;
