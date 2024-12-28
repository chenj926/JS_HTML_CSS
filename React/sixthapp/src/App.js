import React from 'react';
import { UserProvider } from './contexts/UserContext';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  return (
    <UserProvider>
      <div>
        <h1>Welcome to Our App</h1>
        <Profile />
        <Settings />
      </div>
    </UserProvider>
  );
}

export default App;
