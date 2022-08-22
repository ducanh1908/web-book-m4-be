import { Request, Response } from "express";
declare class GerneController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addGerne: (req: Request, res: Response) => Promise<void>;
    deleteGerne: (req: Request, res: Response) => Promise<void>;
    getGerne: (req: Request, res: Response) => Promise<void>;
    updateGerne: (req: Request, res: Response) => Promise<void>;
}
declare const _default: GerneController;
export default _default;
