import React, { useContext } from 'react';
import ContextStarWars from '../context/SWContext';

function Header() {
  const { inputFilter,
    handleInputFilter } = useContext(ContextStarWars);
  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        data-testid="name-filter"
        value={ inputFilter }
        onChange={ handleInputFilter }
      />
    </header>
  );
}

export default Header;
