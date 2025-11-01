import { randomUUID } from "node:crypto";
import db from "../src/infrastructure/databases/sqlite/sqlite.js";

db.exec(`
    CREATE TABLE IF NOT EXISTS USERS   
    (id TEXT PRIMARY KEY, 
    login TEXT, password TEXT, 
    email TEXT) STRICT
    `);

const insert = db.prepare(
	`INSERT INTO USERS (id, login,password, email) VALUES (? ,? ,?, ?)`,
);

insert.run(randomUUID(), "Gibson", "123456", "gibson@dsdgibson.comss");

db.close();
