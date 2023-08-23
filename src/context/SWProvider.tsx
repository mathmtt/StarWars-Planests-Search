import { useState } from 'react';
import SWContext from './SWContext';
import { SWData, UserProviderType, NumericalFilter,
  NumericalFilterValues, OrderStateType, INICIAL_ORDER } from '../types';

function SWProvider({ children }: UserProviderType) {
  const [data, setData] = useState<SWData[]>([]);
  const [inputFilter, setInputFilter] = useState<string>('');
  const [dataNameFilter, setDataNameFilter] = useState<SWData[]>([]);
  const [orderState, setOrderState] = useState<OrderStateType>(INICIAL_ORDER);
  const [
    multiplesFiltersState,
    setMultiplesFiltersState] = useState<NumericalFilter[]>([]);
  const [
    numericalValuesFilter,
    setNumericalValuesFilter,
  ] = useState(NumericalFilterValues);

  const handleChangeOrder = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setOrderState({
      ...orderState,
      [name]: value });
  };

  const handleInputFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = event.target.value;
    setInputFilter(valueInput);

    const filtered = data.filter((item) => item.name.toLowerCase()
      .includes(valueInput.toLowerCase()));

    return setDataNameFilter(filtered);
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setNumericalValuesFilter({
      ...numericalValuesFilter,
      [name]: value });
  };

  const stateglobal = {
    data,
    setData,
    inputFilter,
    setInputFilter,
    handleInputFilter,
    dataNameFilter,
    setDataNameFilter,
    handleInputChange,
    numericalValuesFilter,
    setNumericalValuesFilter,
    multiplesFiltersState,
    setMultiplesFiltersState,
    orderState,
    setOrderState,
    handleChangeOrder,
  };
  return (
    <SWContext.Provider value={ stateglobal }>
      {children}
    </SWContext.Provider>
  );
}
export default SWProvider;
