export class User {
    id: number;
    name: string;
    email: string;
    admin: boolean;
    created_at: string;
    token?: string;

    constructor(
        id = 0,
        name = '',
        email = '',
        created_at = '',
        token = '',
        admin = false,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.created_at = created_at;
        this.token = token;
        this.admin = admin;
    }
}