import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';
import { Sight } from '../models';
import { v4 as uuidv4 } from 'uuid'
import path, { resolve } from 'path';

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

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            let { location } = req.query;
            let page = Number(req.query.page) || 1;
            let limit = Number(req.query.limit) || 9;
            let offset = page * limit - limit;

            let sight;

            let locationStr: string | undefined;
            if (typeof location === "string") {
                locationStr = location;
            } else if (Array.isArray(location) && typeof location[0] === "string") {
                locationStr = location[0];
            }

            if (!locationStr) {
                sight = await Sight.findAndCountAll({ limit, offset });
            } else {
                sight = await Sight.findAndCountAll({ where: { location: locationStr }, limit, offset });
            }

            return res.json(sight);
        } catch (error) {
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

    async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const sight = await Sight.findOne({ where: { sight_id: id } })
            if (!sight) return next(ApiError.badRequest('Достопримечательность не найдена'))

            return res.json(sight)
        } catch (error) {
            next(error);
        }
    }

    // async deleteOne(req: Request, res: Response, next: NextFunction){
    //     try{
    //         const { id } = req.params
    //         const { user_id } = req.body

    //         const product = await Product.findOne({ where: { product_id: id }})
    //         if(!product) return next(ApiError.badRequest('Товар не найден'))

    //         const productData = await product.get({plain: true}) as IProduct
    //         if(user_id !== productData.user_id) return next(ApiError.badRequest('Вы не являетесь продавцом данного товара'))

    //         await product.destroy()

    //         return res.json({message: 'Товар был удалён'})
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // async updateOne(req: Request, res: Response, next: NextFunction){
    //     try{

    //         const { id } = req.params
    //         const { user_id, title, description, inStock, price } = req.body

    //         const product = await Product.findOne({ where: { product_id: id }})
    //         if(!product) return next(ApiError.badRequest('Товар не найден'))

    //         const productData = await product.get({plain: true}) as IProduct
    //         if(user_id !== productData.user_id) return next(ApiError.badRequest('Вы не являетесь продавцом данного товара'))

    //         await product.update({title, description, inStock, price})

    //         return res.json(product)

    //     } catch (error) {
    //         next(error);
    //     }
    // }

}

export default SightController