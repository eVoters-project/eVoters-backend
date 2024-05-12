import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLE_KEY } from "src/decorators/role.decorator";

@Injectable()
export class AuthorizationGuard implements CanActivate {
    
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean  {
        
        const requiredRoles = this.reflector.get<string[]>(
            ROLE_KEY,
            context.getHandler()
        );

        if (!requiredRoles) {
            return true; // no roles specified, grant access
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (!user || !user.id) {
            throw new UnauthorizedException();
        }

        // const userRole = this.getUserRoleFromDb(user); // fetch user role from db
        // if (!userRole || !requiredRoles.includes(userRole)) {
        //     throw new ForbiddenException('User does not have required roles');
        // }

        return true;
    }

}