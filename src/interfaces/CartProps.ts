export interface CartItemProps {
  id?: number;
  price: number;
  productDescription: string;
  productId: number;
  productImage: string;
  productName: string;
  productPrice: number;
  quantity: number;
}

export interface CartItemUpdateProps {
  id: number;
  productPrice: number;
  quantity: number;
}

export interface CartContextProps {
  refreshing: boolean;
  totalPrice: number;
  cartItems: CartItemProps[];
  setCartItems: (items: CartItemProps[]) => void;
  createItem: (item: CartItemProps) => void;
  updateItem: (item: CartItemUpdateProps) => void;
  removeItem: (id: number) => void;
  refreshCart: () => void;
}
