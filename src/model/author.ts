import { Schema, model } from "mongoose";

export interface IAuthor{
    name : string;
    yearOfBirth: string;
    Amount: {
        type: number,
        default : 0
    };
    nationality: string;
    linkWiki : string;
    image: string;
}

const authorSchema = new Schema<IAuthor>({
    name : String,
    yearOfBirth: String,
    Amount: {
        type: Number,
        default : 0
    },
    nationality: String,
    linkWiki : String,
    image: String,
})

const Author = model<IAuthor>('author', authorSchema);

export {Author}