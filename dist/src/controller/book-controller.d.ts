import { NextFunction, Request, Response } from "express";
declare class BookController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateBook: (req: Request, res: Response) => Promise<void>;
    searchBook: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BookController;
export default _default;
