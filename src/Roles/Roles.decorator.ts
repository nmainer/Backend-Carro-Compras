import { SetMetadata } from "@nestjs/common";
import { Rol } from "../Enum/Roles.enum";

export const Roles = (rol : Rol)=>SetMetadata("roles" , rol);