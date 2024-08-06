import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Http2ServerRequest } from "http2";
import { Observable } from "rxjs";
import { Rol } from "src/Enum/Roles.enum";

@Injectable()
export class RolesGuard implements CanActivate{
constructor( private readonly reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    
       const requiresRoles = this.reflector.getAllAndOverride("roles" , [context.getHandler() ,context.getClass()])
       const request = context.switchToHttp().getRequest();
       const user = request.user;

       const hasRole = ()=> { if (requiresRoles.includes("ADMIN") && user.admin===true){
        return true;
       }}
       
       
       const valid = user && hasRole();

       if(!valid){
        throw new ForbiddenException("you do not have permission and are not allowed to access this route");
       }
       return true;
    }
}
