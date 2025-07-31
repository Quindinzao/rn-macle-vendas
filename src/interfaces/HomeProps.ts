export interface HomeViewProps {
  products: any[];
  loading: boolean;
  fetchProducts: () => void;
  setVisible: (v: boolean) => void;
  titleHeader: string;
}
