import { beforeEach, describe, expect, it, vi } from "vitest";
import CreateUser from "../src/application/use-cases/create-user.js";
import User from "../src/core/entities/user.js";
import SqliteUserRepositry from "../src/infrastructure/databases/sqlite/sqlite-user-repository.js";

describe("create-user", () => {
	let createUser: CreateUser;
	beforeEach(() => {
		createUser = new CreateUser(new SqliteUserRepositry());
	});

	it("should return an error if the login is invalid", async () => {
		vi.spyOn(createUser, "execute").mockRejectedValue(
			"Login must be three or more characters",
		);

		const input = {
			login: "Gi",
			password: "123456",
			email: "gibson@asdgibson.com",
		};

		await expect(() => createUser.execute(input)).rejects.toThrow(
			"Login must be three or more characters",
		);
	});

	it("should return an error if the password is invalid", async () => {
		vi.spyOn(createUser, "execute").mockRejectedValue(
			"Password must be six or more characters",
		);
		const input = {
			login: "Gibson",
			password: "12",
			email: "gibson@dcvgibson.com",
		};

		await expect(() => createUser.execute(input)).rejects.toThrow(
			"Password must be six or more characters",
		);
	});

	it("should return an error if the email is invalid", async () => {
		vi.spyOn(createUser, "execute").mockRejectedValue("Email is invalid");
		const input = {
			login: "Gibson",
			password: "1234567",
			email: "gibson",
		};

		await expect(() => createUser.execute(input)).rejects.toThrow(
			"Email is invalid",
		);
	});

	it("should return an error if the user already exist", async () => {
		const input = {
			login: "Gibson",
			password: "1234567",
			email: "gibson@gibson.com",
		};

		vi.spyOn(
			SqliteUserRepositry.prototype,
			"findByEmail",
		).mockResolvedValueOnce(new User(input));

		await expect(() => createUser.execute(input)).rejects.toThrow(
			"User already exists",
		);
	});

	it("should create an user and return a object with {userId: UUID}", async () => {
		vi.spyOn(SqliteUserRepositry.prototype, "findByEmail").mockResolvedValue(
			null,
		);

		vi.spyOn(SqliteUserRepositry.prototype, "save").mockResolvedValue();

		const input = {
			login: "Gibson",
			password: "1234567",
			email: "gibson8@gibson.comsss",
		};

		const result = await createUser.execute(input);

		expect(result).toMatchObject({
			userId: expect.any(String),
		});
	});
});
