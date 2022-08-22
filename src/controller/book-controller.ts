import { NextFunction, Request, Response } from "express";
import { Book } from "../model/book";

class BookController{
    getAll= async (req: Request, res: Response) => {
        let books = await Book.find().populate('gerne','name').populate('author','name').populate('publisher','name')
        console.log(books)
        res.status(200).json(books);

    }
    addBook = async (req: Request, res: Response, next: NextFunction) => {
            let books = req.body;
             let book = await Book.create(books);
            // res.status(200).json('create success')


            let newBook = await Book.findById(book._id).populate('gerne', 'name').populate('author','name').populate('publisher','name')
            res.status(201).json(newBook);
    }



    deleteBook = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        console.log(id)
        try {
            let book = await Book.findById(id);
            if (!book) {
                res.status(404).json();
            } else {
book.deleteOne({_id:id})
                res.status(204).json();
            }
        } catch (error) {
            next(error);
        }
    }

    getBook = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let book = await Book.findById(id).populate('gerne', 'name').populate('publisher','name').populate('author','name')
            if (!book) {
                res.status(404).json();
            } else {
                res.status(200).json(book);
            }
        } catch (error) {
            next(error)
        }
    }

    updateBook = async (req: Request, res: Response) => {
        let id = req.params.id;
        let book = await Book.findById(id);
        if (!book) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Book.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            book = await Book.findById(id).populate('gerne','name').populate('author','name').populate('publisher','name')
            res.status(200).json(book);
        }
    }
    searchBook = async (req: Request, res: Response) => {
        let query = req.query.name
        let book = await Book.find({name:query})
        if(!book){
            res.status(400).json();
        }else{
            res.status(200).json(book)
        }

    }

}
export default new BookController();