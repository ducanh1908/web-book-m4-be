"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gerne_1 = require("../model/gerne");
class GerneController {
    constructor() {
        this.getAll = async (req, res) => {
            let gernes = await gerne_1.Gerne.find();
            res.status(200).json(gernes);
        };
        this.addGerne = async (req, res) => {
            let gerne = req.body;
            gerne = await gerne_1.Gerne.create(gerne);
            res.status(200).json(gerne);
        };
        this.deleteGerne = async (req, res) => {
            let id = req.params.id;
            let gerne = await gerne_1.Gerne.findById(id);
            if (!gerne) {
                res.status(404).json();
            }
            gerne === null || gerne === void 0 ? void 0 : gerne.delete();
            res.status(204).json();
        };
        this.getGerne = async (req, res) => {
            let id = req.params.id;
            let gerne = await gerne_1.Gerne.findById(id);
            if (!gerne) {
                res.status(404).json();
            }
            res.status(200).json(gerne);
        };
        this.updateGerne = async (req, res) => {
            console.log(req.body);
            let id = req.params.id;
            let gerne = await gerne_1.Gerne.findById(id);
            if (!gerne) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                let newGerne = await gerne_1.Gerne.findByIdAndUpdate({ _id: id }, data);
                res.status(200).json(newGerne);
            }
        };
    }
}
exports.default = new GerneController();
//# sourceMappingURL=gerne-controller.js.map