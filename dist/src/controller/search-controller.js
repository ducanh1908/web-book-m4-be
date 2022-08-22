"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("../model/book");
class SearhControler {
    async search(req, res) {
        try {
            let payload = req.body;
            console.log(payload);
            let bookSearch = [];
            await book_1.Book.find({ name: { $regex: payload.name } })
                .populate('author', 'name')
                .populate('gerne', 'name')
                .exec((err, data) => {
                if (err) {
                    console.log(err);
                    res.status(401).json({ message: "keyword doesn't exist" });
                }
                data.map(item => {
                    if (item.author.name.includes(payload.author) && item.gerne.name.includes(payload.gerne)) {
                        bookSearch.push(item);
                    }
                });
                res.status(200).json(bookSearch);
            });
        }
        catch (err) {
            console.log(err);
            res.status(401).json({ message: `Không có kết quả tìm kiếm` });
        }
    }
}
exports.default = new SearhControler();
//# sourceMappingURL=search-controller.js.map