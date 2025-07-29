// External libraries
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

// Database
import {
  getAllCart,
  insertOrUpdateOrder,
  deleteCart,
  updateOrder,
} from '../database/cart';

// Interfaces
import {
  CartContextType,
  CartItem,
  CartItemUpdate,
} from '../interfaces/CartItemProps';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const refreshCart = async () => {
    try {
      const items = await getAllCart();
      setCartItems(items);

      const total = items.reduce((acc, item) => {
        return acc + item.productPrice * item.quantity;
      }, 0);
      setTotalPrice(total);
    } catch (error) {
      console.log('Erro ao buscar carrinho:', error);
    }
  };

  const createItem = async (item: CartItem) => {
    try {
      await insertOrUpdateOrder({
        quantity: item.quantity,
        Product: {
          id: item.productId,
          name: item.productName,
          price: item.productPrice,
          image: item.productImage,
          description: item.productDescription,
        },
      });

      await refreshCart();
    } catch (error) {
      console.log('Erro ao adicionar item ao carrinho:', error);
    }
  };

  const updateItem = async (item: CartItemUpdate) => {
    try {
      if (item.quantity > 0) {
        await updateOrder(
          item.id,
          item.quantity * item.productPrice,
          item.quantity,
        );
      } else {
        await deleteCart(item.id);
      }

      await refreshCart();
    } catch (error) {
      console.log('Erro ao atualizar item no carrinho:', error);
    }
  };

  const removeItem = async (id: number) => {
    try {
      await deleteCart(id);
      await refreshCart();
    } catch (error) {
      console.log('Erro ao remover item do carrinho:', error);
    }
  };

  // const requestProducts = async () => {
  //   await fetchProducts();
  // };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        createItem,
        updateItem,
        removeItem,
        refreshCart,
        totalPrice, // incluído no value
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
