import { useContext } from 'react';
import SWContext from '../context/SWContext';
import useFetchFilter from '../hooks/useFetchFilter';
import { NumericalFilter } from '../types';

function NumericalFilters() {
  const {
    handleInputChange,
    numericalValuesFilter,
    dataNameFilter,
    setDataNameFilter } = useContext(SWContext);
  const { columnFilter, comparisonFilter, valueFilter } = numericalValuesFilter;
  const { data } = useFetchFilter();

  const handleSubmitButtonFilter = (event: React.
    FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (comparisonFilter === 'maior que') {
      const filterNumerical = data
        .filter((item) => Number(item[columnFilter as keyof NumericalFilter])
           > Number(valueFilter));
      setDataNameFilter(filterNumerical);
    } else if (comparisonFilter === 'menor que') {
      const filterNumerical = data
        .filter((item) => Number(item[columnFilter as keyof NumericalFilter])
           < Number(valueFilter));
      setDataNameFilter(filterNumerical);
    } else if (comparisonFilter === 'igual a') {
      const filterNumerical = data
        .filter((item) => Number(item[columnFilter as keyof NumericalFilter])
           === Number(valueFilter));
      setDataNameFilter(filterNumerical);
    }
  };
  console.log(dataNameFilter);
  return (
    <>
      <form onSubmit={ handleSubmitButtonFilter }>
        <label>
          Coluna
          <select
            id="column-filter"
            name="columnFilter"
            data-testid="column-filter"
            onChange={ handleInputChange }
            value={ columnFilter }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label>
          Operador
          <select
            id="comparison-filter"
            name="comparisonFilter"
            data-testid="comparison-filter"
            onChange={ handleInputChange }
            value={ comparisonFilter }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label>
          <input
            type="number"
            name="valueFilter"
            data-testid="value-filter"
            onChange={ handleInputChange }
            value={ valueFilter }
          />
        </label>
        <button
          type="submit"
          id="button-filter"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
      <form action="submit">
        <label htmlFor="">
          Ordenar
          <select name="" id="">
            <option value="">uma opçao aqui</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
          />
          Ascendente
        </label>
        <label>
          <input
            type="checkbox"
          />
          Descendente
        </label>
        <button>Ordenar</button>
        <button>Remover Filtros</button>
      </form>

    </>
  );
}
export default NumericalFilters;
