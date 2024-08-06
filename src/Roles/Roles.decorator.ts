import { SetMetadata } from "@nestjs/common";
import { Rol } from "src/Enum/Roles.enum";

export const Roles = (rol : Rol)=>SetMetadata("roles" , rol);