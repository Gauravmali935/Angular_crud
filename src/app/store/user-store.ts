import { signal } from "@angular/core";
import { User } from "../types/user";

export class UserStore{
    users = signal<any[]>([]);
    
    addUser(user: User){
        this.users.update(users =>{ 
            return [...users, user];
        });
    }
}