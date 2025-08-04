export interface SelectableScreenProps {
  title: string;
  radioTitle: string;
  items: any[];
  value: any;
  setValue: (val: any) => void;
  showAddButton?: boolean;
  onAddPress?: () => void;
  addButtonLabel?: string;
}
