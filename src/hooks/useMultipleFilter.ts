import { useContext } from 'react';
import SWContext from '../context/SWContext';
import { SWData, NumericalFilter } from '../types';

function useFilter() {
  const {
    dataNameFilter,
    setDataNameFilter,
    orderState,
    data,
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

  const handleSortOrder = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const filterOrder = orderState;
    const { column, sort } = filterOrder;
    console.log(filterOrder);
    let planetData = dataNameFilter;

    if (dataNameFilter.length === 0) {
      planetData = data;
    }

    const newDataFilter = planetData.filter((obj) => (
      obj[column as keyof SWData] !== 'unknown'));

    const newDataUnknown = planetData.filter((obj) => (
      obj[column as keyof SWData] === 'unknown'));

    const sortData = newDataFilter.sort((a, b) => {
      if (sort === 'ASC') {
        return Number(a[column as keyof SWData])
         - Number(b[column as keyof SWData]);
      } if (sort === 'DESC') {
        return Number(b[column as keyof SWData])
        - Number(a[column as keyof SWData]);
      }
      return 0;
    });
    sortData.push(...newDataUnknown);
    return setDataNameFilter(sortData);
  };

  return {
    dataNameFilter,
    setDataNameFilter,
    multiplesFilters,
    handleSortOrder,
  };
}

export default useFilter;
