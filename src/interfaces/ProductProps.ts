export interface ProductItemButtonsProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProductItemProps {
  quantityInitial: number;
  orderId?: number;
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  };
}

export interface ProductItemImageProps {
  image: string;
}

export interface ProductItemInfoProps {
  name: string;
  price: number;
  description: string;
}
