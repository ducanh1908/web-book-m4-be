"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("../model/book");
class BookController {
    constructor() {
        this.getAll = async (req, res) => {
            let books = await book_1.Book.find().populate('gerne', 'name').populate('author', 'name').populate('publisher', 'name');
            console.log(books);
            res.status(200).json(books);
        };
        this.addBook = async (req, res, next) => {
            let books = req.body;
            let book = await book_1.Book.create(books);
            let newBook = await book_1.Book.findById(book._id).populate('gerne', 'name').populate('author', 'name').populate('publisher', 'name');
            res.status(201).json(newBook);
        };
        this.deleteBook = async (req, res, next) => {
            let id = req.params.id;
            console.log(id);
            try {
                let book = await book_1.Book.findById(id);
                if (!book) {
                    res.status(404).json();
                }
                else {
                    book.deleteOne({ _id: id });
                    res.status(204).json();
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.getBook = async (req, res, next) => {
            let id = req.params.id;
            try {
                let book = await book_1.Book.findById(id).populate('gerne', 'name').populate('publisher', 'name').populate('author', 'name');
                if (!book) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(book);
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.updateBook = async (req, res) => {
            let id = req.params.id;
            let book = await book_1.Book.findById(id);
            if (!book) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                await book_1.Book.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                book = await book_1.Book.findById(id).populate('gerne', 'name').populate('author', 'name').populate('publisher', 'name');
                res.status(200).json(book);
            }
        };
        this.searchBook = async (req, res) => {
            let query = req.query.name;
            let book = await book_1.Book.find({ name: query });
            if (!book) {
                res.status(400).json();
            }
            else {
                res.status(200).json(book);
            }
        };
    }
}
exports.default = new BookController();
//# sourceMappingURL=book-controller.js.map