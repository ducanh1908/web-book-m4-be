import { Request, Response } from "express";
declare class CartDetailController {
    getCartByUserID: (req: Request, res: Response) => Promise<void>;
    addCart: (req: Request, res: Response) => Promise<void>;
    deleteCartId: (req: Request, res: Response) => Promise<void>;
    UpdateCartId: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CartDetailController;
export default _default;
