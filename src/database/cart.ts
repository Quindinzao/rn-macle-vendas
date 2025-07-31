// Database
import { getDBConnection } from './db';

export const createCartTable = async () => {
  const db = await getDBConnection();

  await db.executeSql(
    `CREATE TABLE IF NOT EXISTS Cart (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      quantity INTEGER,
      price REAL,
      productId INTEGER,
      productName TEXT,
      productImage TEXT,
      productDescription TEXT,
      productPrice REAL
    );`,
  );
};

export const insertOrUpdateOrder = async (item: {
  quantity: number;
  Product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}) => {
  const db = await getDBConnection();
  const productId = Number(item.Product.id);

  const result = await db.executeSql(
    `SELECT * FROM Cart WHERE productId = ? LIMIT 1;`,
    [productId],
  );

  if (result[0].rows.length > 0) {
    const existingItem = result[0].rows.item(0);
    const newPrice = item.quantity * existingItem.productPrice;

    await updateOrder(existingItem.id, newPrice, item.quantity);
  } else {
    const totalPrice = item.quantity * item.Product.price;

    await db.executeSql(
      `INSERT INTO Cart (quantity, price, productId, productName, productPrice, productImage, productDescription)
       VALUES (?, ?, ?, ?, ?, ?, ?);`,
      [
        item.quantity,
        totalPrice,
        productId,
        item.Product.name,
        item.Product.price,
        item.Product.image,
        item.Product.description,
      ],
    );
  }
};

export const getAllCart = async () => {
  await createCartTable();
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT * FROM Cart;`);

  const items = [];
  for (let i = 0; i < results[0].rows.length; i++) {
    const item = results[0].rows.item(i);
    items.push({
      ...item,
    });
  }
  return items;
};

export const updateOrder = async (
  id: number,
  price: number,
  quantity: number,
) => {
  const db = await getDBConnection();

  await db.executeSql(`UPDATE Cart SET quantity = ?, price = ? WHERE id = ?;`, [
    quantity,
    price,
    id,
  ]);
};

export const deleteCart = async (id: number) => {
  const db = await getDBConnection();
  await db.executeSql(`DELETE FROM Cart WHERE id = ?;`, [id]);
};

export const deleteAllOrder = async () => {
  const db = await getDBConnection();
  await db.executeSql(`DELETE FROM Cart;`);
};
