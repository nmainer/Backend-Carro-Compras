import { AuthService } from "./auth.service";
import { UserDto } from "./LoginDto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getLogin(Login: UserDto): Promise<string>;
}
