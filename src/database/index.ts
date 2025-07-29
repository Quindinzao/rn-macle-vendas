// Database
import { createCartTable } from './cart';
import { createCardTable } from './card';
import { createAddressTable } from './address';

export const initializeDB = async () => {
  await createCartTable();
  await createCardTable();
  await createAddressTable();
};
