import type { UUID } from "node:crypto";
import User, { type UserInputDTO } from "../../../core/entities/user.js";
import type UserRepository from "../../../core/repositories/user-repository.ts";
import db from "./sqlite.js";

export default class SqliteUserRepositry implements UserRepository {
	async findByEmail(email: string): Promise<User | null> {
		const query = db.prepare(`SELECT * FROM USERS WHERE EMAIL = ?`);

		const userFounded = query.get(email) as unknown as UserInputDTO;

		return userFounded ? new User(userFounded) : null;
	}

	async findById(userID: UUID): Promise<User | null> {
		throw new Error("Method not implemented.");
	}

	async save(user: User) {
		const query = db.prepare(
			`INSERT INTO USERS (id, login, password, email) VALUES(?,?,?,?)`,
		);

		query.run(user.userId, user.login, user.password, user.email);
	}
}
