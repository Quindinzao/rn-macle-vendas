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
  deleteAllOrder,
} from '../database/cart';

// Interfaces
import {
  CartContextProps,
  CartItemProps,
  CartItemUpdateProps,
} from '../interfaces/CartProps';

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const refreshCart = async () => {
    try {
      setRefreshing(true);
      const items = await getAllCart();
      setCartItems(items);

      const total = items.reduce((acc, item) => {
        return acc + item.productPrice * item.quantity;
      }, 0);
      setTotalPrice(total);
    } catch (error) {
      console.log('Erro ao buscar carrinho:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const createItem = async (item: CartItemProps) => {
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

  const updateItem = async (item: CartItemUpdateProps) => {
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

  const deleteAllCart = async () => {
    try {
      await deleteAllOrder();
      await refreshCart();
    } catch (error) {
      console.log('Erro ao remover itens do carrinho:', error);
    }
  };

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
        totalPrice,
        refreshing,
        deleteAllCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
