// External libraries
import { OrderDetailProps } from './OrderProps';

export interface ModalBaseProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

export interface ModalFilterProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface ModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalOrderDetailProps extends OrderDetailProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
