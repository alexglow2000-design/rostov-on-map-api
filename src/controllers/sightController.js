"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("../error/ApiError"));
const models_1 = require("../models");
class SightController {
    // async create(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         const { sight_id, title, description, description2, rate, location } = req.body
    //         if (!req.files || !req.files.img) {
    //             return next(ApiError.badRequest('Проблемы с картинкой'))
    //         }
    //         let imgFile;
    //         if (Array.isArray(req.files.img)) {
    //             if (req.files.img.length === 0) {
    //                 return next(ApiError.badRequest('Вы забыли изображение'))
    //             }
    //             imgFile = req.files.img[0]
    //         } else {
    //             imgFile = req.files.img
    //         }
    //         let fileName = uuidv4() + '.jpg'
    //         imgFile?.mv(resolve(__dirname, '..', 'static', fileName))
    //         if (!title || !description || !rate || !location) {
    //             return next(ApiError.badRequest('Не все данные заполненны'))
    //         }
    //         const sight = await Sight.create({
    //             sight_id,
    //             title,
    //             description,
    //             description2,
    //             rate,
    //             location,
    //             img: fileName
    //         })
    //         return res.json(sight)
    //     } catch (error) {
    //         next(error);
    //     }
    // }
    async getAll(req, res, next) {
        try {
            let { location } = req.query;
            let page = Number(req.query.page) || 1;
            let limit = Number(req.query.limit) || 9;
            let offset = page * limit - limit;
            let sight;
            let locationStr;
            if (typeof location === "string") {
                locationStr = location;
            }
            else if (Array.isArray(location) && typeof location[0] === "string") {
                locationStr = location[0];
            }
            if (!locationStr) {
                sight = await models_1.Sight.findAndCountAll({ limit, offset });
            }
            else {
                sight = await models_1.Sight.findAndCountAll({ where: { location: locationStr }, limit, offset });
            }
            return res.json(sight);
        }
        catch (error) {
            next(error);
        }
    }
    // async getMy(req: Request, res: Response, next: NextFunction){
    //     try{
    //         const { id } = req.body
    //         const data = await Product.findAll({where: {user_id: id}})
    //         return res.json(data)
    //     } catch (error) {
    //         next(error);
    //     }
    // }
    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const sight = await models_1.Sight.findOne({ where: { sight_id: id } });
            if (!sight)
                return next(ApiError_1.default.badRequest('Достопримечательность не найдена'));
            return res.json(sight);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = SightController;
//# sourceMappingURL=sightController.js.map