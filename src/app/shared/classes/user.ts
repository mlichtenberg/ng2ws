export class User {
    email: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(email: string, id?: string, createdAt?: Date, updatedAt?: Date){
        this.email = email;
        this.id = id;
        this.createdAt = createdAt ? createdAt: new Date();
        this.updatedAt = updatedAt ? updatedAt: new Date();
    }
}
