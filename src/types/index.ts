export type SWContextType = {
  data: SWData[];
  setData: React.Dispatch<React.SetStateAction<SWData[]>>;
  inputFilter: string;
  setInputFilter: React.Dispatch<React.SetStateAction<string>>;
  handleInputFilter: (event: React.ChangeEvent<HTMLInputElement>) => void
  dataNameFilter: SWData[];
  setDataNameFilter: React.Dispatch<React.SetStateAction<SWData[]>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => void;
  numericalValuesFilter: NumericalFilter;
};
export type SWData = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
  columnFilter: string;
  comparisonFilter: string;
  valueFilter: string;
};

export type UserProviderType = {
  children: React.ReactNode;
};

export type APItype = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type NumericalFilter = {
  columnFilter: string;
  comparisonFilter: string;
  valueFilter: string;
};

export const NumericalFilterValues = {
  columnFilter: 'population',
  comparisonFilter: 'maior que',
  valueFilter: '0',
};
