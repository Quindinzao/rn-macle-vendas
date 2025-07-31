export interface HomeViewProps {
  products: any[];
  loading: boolean;
  fetchProducts: () => void;
  setVisible: (v: boolean) => void;
  titleHeader: string;
  setSearchName: (value: string) => void;
  searchName: string;
  setSelectedOrdering: (value: string) => void;
  selectedOrdering: string;
}
