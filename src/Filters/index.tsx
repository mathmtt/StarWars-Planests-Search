import { useContext, useState, useEffect } from 'react';
import SWContext from '../context/SWContext';
import useFetchFilter from '../hooks/useFetchFilter';
import useMultipleFilter from '../hooks/useMultipleFilter';
import { NumericalFilterValues } from '../types';

function NumericalFilters() {
  const optionsCollumn = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [optionsState, setOptionsState] = useState(optionsCollumn);
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
  useEffect(() => {
    if (multiplesFiltersState.length > 0) {
      const collumn = multiplesFiltersState.map((filters) => filters.columnFilter);
      const newOptionsCollumn = optionsCollumn
        .filter((option) => !collumn.includes(option));
      setOptionsState(newOptionsCollumn);
    }
  }, [multiplesFiltersState]);

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
            {
              optionsState.map((option) => (
                <option value={ option } key={ option }>{ option }</option>
              ))
           }
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
