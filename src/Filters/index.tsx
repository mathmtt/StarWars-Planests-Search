import { useContext } from 'react';
import SWContext from '../context/SWContext';
import useFetchFilter from '../hooks/useFetchFilter';
import useMultipleFilter from '../hooks/useMultipleFilter';
import { NumericalFilterValues } from '../types';

function NumericalFilters() {
  const {
    handleInputChange,
    numericalValuesFilter,
    multiplesFiltersState,
    setNumericalValuesFilter,
    setMultiplesFiltersState,
  } = useContext(SWContext);
  const { columnFilter, comparisonFilter, valueFilter } = numericalValuesFilter;
  const { data } = useFetchFilter();
  const { dataNameFilter, multiplesFilters } = useMultipleFilter();
  const handleSubmitButtonFilter = (event: React.
    FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMultiplesFiltersState([
      ...multiplesFiltersState,
      numericalValuesFilter,
    ]);

    if (dataNameFilter.length === 0) {
      multiplesFilters(data);
    } else {
      multiplesFilters(dataNameFilter);
    }
    setNumericalValuesFilter(NumericalFilterValues);
  };

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
      {
        multiplesFiltersState.map((filtered) => (
          <p key={ `${filtered.columnFilter}${filtered.valueFilter}` }>
            {filtered.columnFilter}
            {' '}
            {filtered.comparisonFilter}
            {' '}
            {filtered.valueFilter}
          </p>))
      }

    </>
  );
}
export default NumericalFilters;
