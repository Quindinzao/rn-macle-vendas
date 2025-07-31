export interface SearchRowProps {
  onPress: () => void;
  setSearchName?: (value: string) => void;
  searchName?: string;
}

export interface Filters {
  minimal?: number;
  maximum?: number;
  orderBy?: string;
}

export interface FilterFormProps {
  onFilterSubmit: (filters: {
    minimal?: number;
    maximum?: number;
    orderBy?: string;
  }) => void;
}
