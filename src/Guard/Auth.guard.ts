import { CanActivate, ExecutionContext, Injectable, PayloadTooLargeException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly  jwtServices : JwtService){}


   async canActivate (context: ExecutionContext):  Promise<boolean>{

      const request = context.switchToHttp().getRequest();
      const token = request.headers["authorization"].split(" ")[1]

      if(!token){
        throw new UnauthorizedException("Bearer token not found");
      }
      try{
      const secret = process.env.JWT_SECRET
      const payLoad= await  this.jwtServices.verifyAsync(token , {secret:secret})
      payLoad.iat= new Date(payLoad.iat *1000)
      payLoad.exp = new Date(payLoad.exp *1000)
      payLoad.roles = ["ADMIN"];
      request.user = payLoad;
      return true;

      }catch(err){
       throw new UnauthorizedException("Token invalid");
      }

}

}
    