export interface HeaderProps {
  title: string;
  isBack?: boolean;
  typeHeader?: 'long' | 'short';
}

export interface HeaderSectionProps {
  title: string;
  onFilterPress?: () => void;
  setSearchName?: (value: string) => void;
  searchName?: string;
}
