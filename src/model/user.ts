import { model, Schema } from "mongoose"


export interface IUser {
    username?: string;
    password?: string;
    name?: string;
    email?: string;
    address?: string;
    phone?: string;
    role?: string;
    
}

const userSchema = new Schema<IUser>({
    username: String,
    password: String,
    name: String,
    email: String,
    address: String,
    phone: String,
    role: String
});

const User = model<IUser>('user', userSchema);
export {User}