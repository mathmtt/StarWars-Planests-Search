import { useContext } from 'react';
import SWContext from '../context/SWContext';
import { SWData, NumericalFilter } from '../types';

function useFilter() {
  const {
    dataNameFilter,
    setDataNameFilter,
  } = useContext(SWContext);

  const multiplesFilters = (
    dataApi: SWData[],
    valuesFilter: NumericalFilter[],
  ) => {
    valuesFilter.forEach((value) => {
      if (value.comparisonFilter === 'maior que') {
        const dataFilterNumerical = dataApi
          .filter((obj) => Number(obj[value
            .columnFilter as keyof SWData])
               > Number(value.valueFilter));
        dataApi = dataFilterNumerical;
      } else if (value.comparisonFilter === 'menor que') {
        const filterNumerical = dataApi
          .filter((obj) => Number(obj[value
            .columnFilter as keyof SWData])
               < Number(value.valueFilter));
        dataApi = filterNumerical;
      } else if (value.comparisonFilter === 'igual a') {
        const filterNumerical = dataApi
          .filter((obj) => Number(obj[value
            .columnFilter as keyof SWData])
               === Number(value.valueFilter));
        dataApi = filterNumerical;
      }
    });
    setDataNameFilter(dataApi);
  };

  return {
    dataNameFilter,
    setDataNameFilter,
    multiplesFilters,
  };
}

export default useFilter;
