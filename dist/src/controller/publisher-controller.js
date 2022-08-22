"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const publisher_1 = require("../model/publisher");
class PublisherController {
    constructor() {
        this.getAll = async (req, res) => {
            let publishers = await publisher_1.Publisher.find();
            res.status(200).json(publishers);
        };
        this.addPublisher = async (req, res) => {
            let publisher = req.body;
            publisher = await publisher_1.Publisher.create(publisher);
            res.status(200).json(publisher);
        };
        this.deletePublisher = async (req, res) => {
            let id = req.params.id;
            let publisher = await publisher_1.Publisher.findById(id);
            if (!publisher) {
                res.status(404).json();
            }
            publisher === null || publisher === void 0 ? void 0 : publisher.delete();
            res.status(204).json();
        };
        this.getPublisher = async (req, res) => {
            let id = req.params.id;
            let publisher = await publisher_1.Publisher.findById(id);
            if (!publisher) {
                res.status(404).json();
            }
            res.status(200).json(publisher);
        };
        this.updatePublisher = async (req, res) => {
            console.log(req.body);
            let id = req.params.id;
            let publisher = await publisher_1.Publisher.findById(id);
            if (!publisher) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                let newPublisher = await publisher_1.Publisher.findByIdAndUpdate({ _id: id }, data);
                res.status(200).json(newPublisher);
            }
        };
    }
}
exports.default = new PublisherController();
//# sourceMappingURL=publisher-controller.js.map