import { getDBConnection } from './db';

export const createCardTable = async () => {
  const db = await getDBConnection();
  await db.executeSql(
    `CREATE TABLE IF NOT EXISTS Card (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nickname TEXT,
      cardNumber TEXT,
      cvv TEXT,
      expirationDate TEXT
    );`,
  );
};

export const insertCard = async (card: {
  nickname: string;
  cardNumber: string;
  cvv: string;
  expirationDate: string;
}) => {
  const db = await getDBConnection();
  await db.executeSql(
    `INSERT INTO Card (nickname, cardNumber, cvv, expirationDate) VALUES (?, ?, ?, ?);`,
    [card.nickname, card.cardNumber, card.cvv, card.expirationDate],
  );
};

export const getAllCards = async () => {
  const db = await getDBConnection();
  const results = await db.executeSql(`SELECT * FROM Card;`);
  const cards = [];
  for (let i = 0; i < results[0].rows.length; i++) {
    cards.push(results[0].rows.item(i));
  }
  return cards;
};

export const deleteCard = async (id: number) => {
  const db = await getDBConnection();
  await db.executeSql(`DELETE FROM Card WHERE id = ?;`, [id]);
};
