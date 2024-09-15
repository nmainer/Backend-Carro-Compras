"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: "la opcion email no debe estar vacia" }),
    (0, swagger_1.ApiProperty)({
        description: "Debe ir un email valido",
        example: "mail.mail@gmail.com"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Debe ir un nombre identificatorio personal",
        example: "Nicolas"
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "La opcion name no debe estar vacia" }),
    (0, class_validator_1.Length)(3, 80, { message: "la propiedad name debe contener un minimo de 3 hasta 80 caracteres" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 15, { message: "la propiedad password debe contener un minimo de 8 hasta 15 caracteres" }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,100}$/, {
        message: "password debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)"
    }),
    (0, swagger_1.ApiProperty)({
        description: "aqui se coloca el password deseado cumpliendo con los requisitos exigidos",
        example: "Nic@1990"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: "aqui se debe repetir misma contraseña",
        example: "Nic@1990"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "admin", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 80, { message: "address debe contener un minimo de 3 hasta 80 caracteres" }),
    (0, swagger_1.ApiProperty)({
        description: "aqui se coloca la direccion",
        example: "Saavedra 4353"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: "la propiedad phone no debe estar vacia" }),
    (0, class_validator_1.IsInt)({ message: "El num debe ser entero" }),
    (0, swagger_1.ApiProperty)({
        description: "aqui se coloca numero telefonico",
        example: 4521878
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 20, { message: "la propiedad country debe contener un minimo de 5 hasta 20 caracteres" }),
    (0, swagger_1.ApiProperty)({
        description: "aqui se coloca el pais de residencia",
        example: "Argentina"
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 20, { message: "la propiedad country debe contener un minimo de 5 hasta 20 caracteres" }),
    (0, swagger_1.ApiProperty)({
        description: "aqui se coloca ciudad donde esta viviendo",
        example: "Cap. Fed."
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
//# sourceMappingURL=UserDto.js.map