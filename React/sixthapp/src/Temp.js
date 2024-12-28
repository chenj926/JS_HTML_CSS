import React from 'react';

// Step 1: Create the Context
const UserContext = React.createContext();

// Step 2: Build a Provider component
function UserProvider({ children }) {
  // This could be dynamic, e.g., from an API or user input
  const [user, setUser] = React.useState({
    name: 'Alice',
    age: 25
  });

  // Step 3: Return the provider with the value
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Step 4: Export the context and provider
export { UserContext, UserProvider };