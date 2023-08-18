import React from 'react';
import './App.css';
import Header from './Header';
import Table from './Table';
import NumericalFilters from './Filters';

function App() {
  return (
    <main>
      <Header />
      <NumericalFilters />
      <Table />
    </main>
  );
}

export default App;
