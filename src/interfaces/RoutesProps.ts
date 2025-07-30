export type RoutesProps = {
  LoginRegister: undefined;
  Tabs: { initialTab?: 'home' | 'shoppingCart' | 'orders' };
  Delivery: { totalPrice: number };
  Address: { totalPrice: number };
  PaymentMethod: { totalPrice: number; address?: string };
  Card: { totalPrice: number; address?: string; paymentMethod: string };
  Pix: { totalPrice: number; address?: string; paymentMethod: string };
  AllDone: undefined;
};
