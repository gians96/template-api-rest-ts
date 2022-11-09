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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.getItems = exports.postItem = exports.getItem = exports.deleteItem = void 0;
const item_srv_1 = require("../services/item.srv");
const error_handle_1 = require("../utils/error.handle");
const getItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_srv_1.getCar)(id);
        const data = response ? response : "NOT_FOUND";
        res.status(200).send(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_ITEM");
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, item_srv_1.getCars)();
        res.status(200).send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_ITEMs");
    }
});
exports.getItems = getItems;
const updateItem = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_srv_1.updateCar)(id, body);
        res.status(200).send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_UPDATE_ITEM");
    }
});
exports.updateItem = updateItem;
const postItem = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield (0, item_srv_1.insertCar)(body);
        res.status(200).send(responseItem);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_POSRT_ITEM", error);
    }
});
exports.postItem = postItem;
const deleteItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, item_srv_1.deleteCar)(id);
        res.status(200).send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "ERROR_DELETE_ITEM");
    }
});
exports.deleteItem = deleteItem;
