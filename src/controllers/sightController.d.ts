import { Request, Response, NextFunction } from 'express';
declare class SightController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getOne(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
}
export default SightController;
//# sourceMappingURL=sightController.d.ts.map