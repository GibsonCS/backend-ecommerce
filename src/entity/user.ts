import { randomUUID, type UUID } from "crypto";

interface UserInputDTO {
    login: string;
    password: string;
    email: string;
}

export default class User {
    private _userId: UUID;
    private _login: string;
    private _password: string;
    private email: string;
    private createAt: Date;

    constructor({ login, password, email }: UserInputDTO) {
        this._userId = randomUUID()

        if (login.length >= 3) {
            this._login = login
        } else {
            throw new Error('Login must be three or more characters')
        }

        if (password.length >= 6) {
            this._password = password
        } else {
            throw new Error('Password must be six or more characters')
        }

        this.email = email
        this.createAt = new Date()
    }

    get userId(): UUID {
        return this._userId
    }

    get login(): string {
        return this._login
    }

    get password(): string {
        return this._password
    }


}
