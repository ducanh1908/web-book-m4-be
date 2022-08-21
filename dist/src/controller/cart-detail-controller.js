"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const cartDetail_1 = require("../model/cartDetail");
class CartDetailController {
    constructor() {
        this.getCartByUserID = async (req, res) => {
            let id = req.params.id;
            let user = await user_1.User.findById(id);
            if (!user) {
                res.status(404).json;
            }
            else {
                let cartDetail = await cartDetail_1.CartDetail.find({ "user": { "_id": user.id } });
                res.status(200).json(cartDetail);
            }
        };
        this.addCart = async (req, res) => {
            let cart = req.body;
            let cartdetail = await cartDetail_1.CartDetail.create(cart);
            res.status(200).json;
        };
        this.deleteCartId = async (req, res) => {
            let id = req.params.id;
            let cart = await cartDetail_1.CartDetail.findById(id);
            console.log(cart);
            if (!cart) {
                res.status(404).json;
            }
            else {
                let cartDetail = await cartDetail_1.CartDetail.findByIdAndUpdate({ id: id });
                res.status(200).json(cartDetail);
            }
        };
        this.UpdateCartId = async (req, res) => {
            let id = req.params.id;
            let cart = await cartDetail_1.CartDetail.findById(id);
            if (!cart) {
                res.status(404).json;
            }
            else {
                let data = req.body;
                let cartDetail = await cartDetail_1.CartDetail.findByIdAndUpdate({ id: id });
                console.log(cartDetail);
                res.status(200).json(cartDetail);
            }
        };
    }
}
exports.default = new CartDetailController();
//# sourceMappingURL=cart-detail-controller.js.map