"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProducts = exports.updateProduct = exports.createProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.create(req.body);
        return res.status(200).json({
            status: "success",
            data: {
                products,
            },
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            msg: "Algo salio mal",
        });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(req.body);
    try {
        const product = yield product_1.default.findByIdAndUpdate(id, req.body);
        return res.status(200).json({
            status: "success",
            data: { product },
        });
    }
    catch (_a) {
        return res.status(500).json({
            status: "error",
            msg: "Algo salio mal",
        });
    }
});
exports.updateProduct = updateProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find();
        return res.status(200).json({
            status: "success",
            data: {
                products,
            },
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            msg: "Algo salio mal",
        });
    }
});
exports.getProducts = getProducts;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.findByIdAndDelete(req.body.id);
        return res.status(200).json({
            status: "success",
            data: null,
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "error",
            msg: "Algo salio mal",
        });
    }
});
exports.deleteProduct = deleteProduct;
