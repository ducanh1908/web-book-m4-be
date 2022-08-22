import { Router } from "express";
import { authRouter } from "./auth-router";
import { bookRoute } from "./book-route";
import { publisherRoute } from "./publisher-route";
import { authorRoute } from "./author-route";
import { gerneRoute } from "./gerne-route";

export const router = Router();
router.use('',authRouter)
router.use('/books',bookRoute)
router.use('/publishers',publisherRoute)
router.use('/authors',authorRoute)
router.use('/gernes',gerneRoute)
