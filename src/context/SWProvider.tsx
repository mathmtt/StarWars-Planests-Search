import { useState } from 'react';
import ContextStarWars from './SWContext';
import { SWData, UserProviderType } from '../types';

function StarWarsProvider({ children }: UserProviderType) {
  const [data, setData] = useState<SWData[]>([]);

  const stateglobal = {
    data,
    setData,
  };

  return (
    <ContextStarWars.Provider value={ stateglobal }>
      {children}
    </ContextStarWars.Provider>
  );
}
export default StarWarsProvider;
