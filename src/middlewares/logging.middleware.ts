import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Request object: ${JSON.stringify(req.headers)}`);
        next();
    }
}

// export function logger(req: Request, res: Response, next: NextFunction) {
//     console.log(`Request object: ${JSON.stringify(req.headers)}`);
//     next();
// }