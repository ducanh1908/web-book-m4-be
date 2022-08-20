import AuthorController from "../controller/author-controller";
import { Router } from "express";

export const authorRoute = Router();
// authorRouter.use(auth)
authorRoute.get('',AuthorController.getAll);
authorRoute.post('', AuthorController.addAuthor);
authorRoute.delete('/:id',AuthorController.deleteAuthor);
authorRoute.get('/detail/:id',AuthorController.getAuthor);
authorRoute.put('/:id', AuthorController.updateAuthor);
authorRoute.get('/search',AuthorController.searchAuthor);