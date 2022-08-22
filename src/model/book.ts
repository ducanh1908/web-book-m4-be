import { model, Schema } from 'mongoose';
import { IGerne } from "./gerne";
import {IAuthor} from "./author"
import { IPublisher } from "./publisher";


export interface IBook {
    name?: string;
    author?: IAuthor
    yearOfPublish?: number;
    reprint?: number;
    ISBN?: number;
    description?: string;
    image?: string;
    gerne?:IGerne
    price?:number;
    publisher?:IPublisher
}

const bookSchema = new Schema<IBook>({
    name: String,
    publisher:{
        type:Schema.Types.ObjectId,
        ref:'publisher'

    },
    yearOfPublish: Number,
    reprint: Number,
    ISBN: Number,
    description:String,
    image: String,
    gerne:{
        type:Schema.Types.ObjectId,
        ref:'gerne'
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'author'
    },
    price:String
})
const Book = model<IBook>('Book',bookSchema)
export {Book}