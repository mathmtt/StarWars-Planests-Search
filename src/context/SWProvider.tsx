import { useState } from 'react';
import ContextStarWars from './SWContext';
import { SWData, UserProviderType } from '../types';

function StarWarsProvider({ children }: UserProviderType) {
  const [data, setData] = useState<SWData[]>([]);
  const [inputFilter, setInputFilter] = useState<string>('');
  const [dataNameFilter, setDataNameFilter] = useState<SWData[]>([]);

  const handleInputFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = event.target.value;
    setInputFilter(valueInput);

    const filtered = data.filter((obj) => obj.name.toLowerCase()
      .includes(valueInput.toLowerCase()));

    return setDataNameFilter(filtered);
  };

  const stateglobal = {
    data,
    setData,
    inputFilter,
    handleInputFilter,
    dataNameFilter,
    setDataNameFilter,
    setInputFilter,
  };

  return (
    <ContextStarWars.Provider value={ stateglobal }>
      {children}
    </ContextStarWars.Provider>
  );
}
export default StarWarsProvider;
