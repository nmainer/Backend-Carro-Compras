import { AuthService } from "./auth.service";
import { LoginUserDto } from "./LoginDto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getLogin(Login: LoginUserDto): Promise<string>;
}
