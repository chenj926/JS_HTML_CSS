import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function Settings() {
  const { user, setUser } = useContext(UserContext);

  // Example: let’s change the user’s name:
  const handleChangeName = () => {
    setUser(prev => ({
      ...prev,
      name: 'Bob' // new name
    }));
  };

  return (
    <div>
      <h2>Settings</h2>
      <p>Current user: {user.name}</p>
      <button onClick={handleChangeName}>Change Name to Bob</button>
    </div>
  );
}

export default Settings;
