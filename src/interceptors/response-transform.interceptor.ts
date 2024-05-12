import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Response } from 'express';

@Injectable()
export class ResponseTransFormInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const response = context.switchToHttp().getResponse<Response>();
        const statusCode = response.statusCode;
        return next.handle().pipe(map((data) => ({ statusCode, timeStamp: new Date(), data })));
    }

}