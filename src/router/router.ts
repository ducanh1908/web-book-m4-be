import { Router } from "express";
import { authRouter } from "./auth-router";
import { authorRoute } from "./author-route";
import { bookRoute } from "./book-route";
import { cartdetailRoute } from "./cart-detail-route";
import { gerneRoute } from "./gerne-route";
export const router = Router();
router.use('/gernes',gerneRoute)
router.use('/books',bookRoute);
router.use('/authors',authorRoute)
router.use('',authRouter)
router.use('/cartdetails',cartdetailRoute)