import { createContext, useContext, useState } from 'react';

const PartyContext = createContext(null);

export const PartyProvider = ({ children }) => {
  const [party, setParty] = useState(null);

  return (
    <PartyContext.Provider value={{ party, setParty }}>
      {children}
    </PartyContext.Provider>
  );
};

export const useParty = () => useContext(PartyContext);
