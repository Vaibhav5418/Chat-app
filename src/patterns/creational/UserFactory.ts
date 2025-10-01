export interface IUser { username: string; role: string; }
export class AdminUser implements IUser { role="Admin"; constructor(public username:string){} }
export class RegularUser implements IUser { role="Regular"; constructor(public username:string){} }
export class GuestUser implements IUser { role="Guest"; constructor(public username:string){} }

export class UserFactory {
    static create(type:"admin"|"regular"|"guest", username:string): IUser {
        if(type==="admin") return new AdminUser(username);
        if(type==="guest") return new GuestUser(username);
        return new RegularUser(username);
    }
}
