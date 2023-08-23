import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from "vitest";
import App from '../App';
import MockData from '../mocks/mockData';
import SWProvider from '../context/SWProvider';
describe('testando a aplicação', () => {
  test('renderiza um titulo', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => MockData,
    });
  render(
    <SWProvider>
    <App />
    </SWProvider>
  );
  const title = screen.getByText(/^Projeto Star Wars - Trybe$/);
  expect(title).toBeInTheDocument();
});

test('renderiza um butão com o texto Filtrar', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <SWProvider>
  <App />
  </SWProvider>
);
  const filtrarButton = screen.getByRole('button', { name: /Filtrar/i });
  expect(filtrarButton).toBeInTheDocument();
});

test('renderiza um butão com o texto Ordenar', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <SWProvider>
  <App />
  </SWProvider>
);
  const ordenarButton = screen.getByRole('button', { name: /Ordenar/i });
  expect(ordenarButton).toBeInTheDocument();
});

test('renderiza um butão como o texto Remover Filtros', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <SWProvider>
  <App />
  </SWProvider>
);
  const removeFiltrosButton = screen.getByRole('button', { name: /Remover Filtros/i });
  expect(removeFiltrosButton).toBeInTheDocument();
});

test('renderiza uma tabela', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <SWProvider>
  <App />
  </SWProvider>
);
  const tabelaElement = screen.getByRole('table');
  expect(tabelaElement).toBeInTheDocument();
});

test('Verifica se a tabela tem 13 colunas', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => MockData,
  });
render(
  <SWProvider>
  <App />
  </SWProvider>
);
  const tabelaElement = screen.getByRole('table');
  const colunas = tabelaElement.querySelectorAll('th');
  expect(colunas.length).toBe(13);
});
});