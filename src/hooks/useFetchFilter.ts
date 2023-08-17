import { useContext, useEffect, useState } from 'react';
import { APItype } from '../types';
import SWContext from '../context/SWContext';

function useFetchFilter() {
  const { data, setData } = useContext(SWContext);
  const [error, setError] = useState<string | null>(null);
  const URL_API = 'https://swapi.dev/api/planets/';
  useEffect(() => {
    async function fechtData() {
      try {
        const response = await fetch(URL_API);
        const dataResults = await response.json();
        const filter = dataResults.results.map((item: APItype) => {
          const { residents, ...residentsItem } = item;
          return residentsItem;
        });
        setData(filter);
      } catch (errorr) {
        setError('error');
      }
    }
    fechtData();
  }, [setData]);

  return {
    data,
    setData,
    error,
  };
}

export default useFetchFilter;
