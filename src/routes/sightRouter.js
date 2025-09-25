"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sightController_1 = __importDefault(require("../controllers/sightController"));
const router = (0, express_1.Router)();
const { getAll, getOne } = new sightController_1.default();
router.get('/', getAll);
// router.post('/', create);
router.get('/:id', getOne);
// router.post('/:id', updateOne);
// router.delete('/:id', deleteOne);
exports.default = router;
//# sourceMappingURL=sightRouter.js.map