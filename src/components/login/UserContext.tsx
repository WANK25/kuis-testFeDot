import { createContext, useContext, useState } from 'react';
import { UserContextType } from './interface_userContext';

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState(
    localStorage.getItem('quizUser') || '',
  );

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext)!;
