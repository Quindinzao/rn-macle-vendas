export interface CartItem {
  id?: number;
  price: number;
  productDescription: string;
  productId: number;
  productImage: string;
  productName: string;
  productPrice: number;
  quantity: number;
}

export interface CartItemUpdate {
  id: number;
  productPrice: number;
  quantity: number;
}

export interface CartContextType {
  refreshing: boolean;
  totalPrice: number;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  createItem: (item: CartItem) => void;
  updateItem: (item: CartItemUpdate) => void;
  removeItem: (id: number) => void;
  refreshCart: () => void;
}
