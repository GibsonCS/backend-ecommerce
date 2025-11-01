import type { UserInputDTO } from "../../core/entities/user.js";
import User from "../../core/entities/user.js";
import type UserRepository from "../../core/repositories/user-repository.js";

export default class CreateUser {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async execute({ login, password, email }: UserInputDTO) {
		const userFounded = await this.userRepository.findByEmail(email);

		if (userFounded) throw new Error("User already exists!");

		const user = new User({ login, password, email });

		await this.userRepository.save(user);

		return { userId: user.userId };
	}
}
