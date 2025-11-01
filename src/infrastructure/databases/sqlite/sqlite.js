import sqlit from "node:sqlite";

const DatabaseSync = sqlit.DatabaseSync;

const db = new DatabaseSync("./ecommerce.db");

export default db;
