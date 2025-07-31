export interface RadioFormProps {
  title: string;
  items: { title: string; image?: any }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface RadioButtonProps {
  items: {
    title: string;
    image?: any;
  }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
