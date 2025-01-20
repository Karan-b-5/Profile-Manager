import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); 
  
  const login = () => setIsAdmin(true); 
  const logout = () => setIsAdmin(false);

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles, isAdmin, login, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};
