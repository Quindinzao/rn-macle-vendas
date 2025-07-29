import { getDBConnection } from './db';

export const createAddressTable = async () => {
  const db = await getDBConnection();
  await db.executeSql(
    `CREATE TABLE IF NOT EXISTS Address (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cep TEXT,
      streetName TEXT,
      neighborhood TEXT,
      number TEXT,
      city TEXT,
      state TEXT
    );`,
  );
};

export const insertAddress = async (address: {
  cep: string;
  streetName: string;
  neighborhood: string;
  number: string;
  city: string;
  state: string;
}) => {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT INTO Address (cep, streetName, neighborhood, number, city, state) VALUES (?, ?, ?, ?, ?, ?);`,
    [
      address.cep,
      address.streetName,
      address.neighborhood,
      address.number,
      address.city,
      address.state,
    ],
  );
};

export const getAllAddresses = async () => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT * FROM Address;`);
  const addresses = [];
  for (let i = 0; i < results[0].rows.length; i++) {
    addresses.push(results[0].rows.item(i));
  }
  return addresses;
};

export const deleteAddress = async (id: number) => {
  const db = await getDBConnection();
  await db.executeSql(`DELETE FROM Address WHERE id = ?;`, [id]);
};
