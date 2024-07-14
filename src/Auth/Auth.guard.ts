import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";



@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      const authHeader = request.headers.authorization;
      if(!authHeader){
        return false;
      }
      const authHeaderLength = authHeader.split(":");
      if (!authHeaderLength[0] || !authHeaderLength[1] || authHeaderLength.length !== 2){
        return false;
      }
      return true;
    }
};
    