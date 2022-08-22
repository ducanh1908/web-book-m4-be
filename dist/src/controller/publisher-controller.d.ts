import { Request, Response } from "express";
declare class PublisherController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addPublisher: (req: Request, res: Response) => Promise<void>;
    deletePublisher: (req: Request, res: Response) => Promise<void>;
    getPublisher: (req: Request, res: Response) => Promise<void>;
    updatePublisher: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PublisherController;
export default _default;
