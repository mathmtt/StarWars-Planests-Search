import { useContext } from 'react';
import SWContext from '../context/SWContext';
import { SWData } from '../types';

function useMultipleFilter() {
  const {
    dataNameFilter,
    setDataNameFilter,
    numericalValuesFilter } = useContext(SWContext);
  const { comparisonFilter, columnFilter, valueFilter } = numericalValuesFilter;

  const multiplesFilters = (dataApi: SWData[]) => {
    if (comparisonFilter === 'maior que') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[columnFilter as keyof SWData])
             > Number(valueFilter));
      setDataNameFilter(filterNumerical);
    } else if (comparisonFilter === 'menor que') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[columnFilter as keyof SWData])
             < Number(valueFilter));
      setDataNameFilter(filterNumerical);
    } else if (comparisonFilter === 'igual a') {
      const filterNumerical = dataApi
        .filter((obj) => Number(obj[columnFilter as keyof SWData])
             === Number(valueFilter));
      setDataNameFilter(filterNumerical);
    } return false;
  };

  return {
    dataNameFilter,
    setDataNameFilter,
    multiplesFilters,
  };
}

export default useMultipleFilter;
