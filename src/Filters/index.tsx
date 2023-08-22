import { useContext, useState, useEffect } from 'react';
import SWContext from '../context/SWContext';
import useFetchFilter from '../hooks/useFetchFilter';
import { NumericalFilterValues } from '../types';
import useFilter from '../hooks/useMultipleFilter';

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
    setDataNameFilter,
  } = useContext(SWContext);
  const { multiplesFilters } = useFilter();
  const { data } = useFetchFilter();
  const handleSubmitButtonFilter = (event: React.
    FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filtered = numericalValuesFilter;
    setMultiplesFiltersState([
      ...multiplesFiltersState,
      { ...filtered },
    ]);
    setNumericalValuesFilter(NumericalFilterValues);
  };
  useEffect(() => {
    if (multiplesFiltersState.length > 0) {
      const collumn = multiplesFiltersState.map((filters) => (filters.columnFilter));
      const newOptionsCollumn = optionsCollumn
        .filter((option) => !collumn.includes(option));
      setOptionsState(newOptionsCollumn);
    }
    multiplesFilters(data, multiplesFiltersState);
  }, [multiplesFiltersState]);

  const handleDeleteFilter = (columnFilter: string) => {
    const updatedFilters = multiplesFiltersState
      .filter((obj) => obj.columnFilter !== columnFilter);
    setMultiplesFiltersState(updatedFilters);
    setOptionsState([
      ...optionsState,
      columnFilter,
    ]);
    setDataNameFilter([]);
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
            value={ numericalValuesFilter.columnFilter }
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
            value={ numericalValuesFilter.comparisonFilter }
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
            value={ numericalValuesFilter.valueFilter }
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
      <form>
        <label htmlFor="">
          Ordenar
          <button
            type="button"
            onClick={ () => setMultiplesFiltersState([]) }
            data-testid="button-remove-filters"
          >
            Remover Filtros

          </button>
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
          <div
            key={ `${Math.random()}` }
            data-testid="filter"
          >
            <p>
              {filtered.columnFilter}
              {' '}
              {filtered.comparisonFilter}
              {' '}
              {filtered.valueFilter}
            </p>
            <button
              className="button-delete"
              onClick={ () => handleDeleteFilter(filtered.columnFilter) }
            >
              X
            </button>

          </div>))
      }
    </>
  );
}
export default NumericalFilters;
