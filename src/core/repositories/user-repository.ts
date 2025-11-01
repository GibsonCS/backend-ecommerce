import type { UUID } from "node:crypto";
import type User from "../entities/user.js";

export default interface UserRepository {
	findById(userID: UUID): Promise<User | null>;
	save(user: User): Promise<void>;
	findByEmail(email: string): Promise<User | null>;
}
