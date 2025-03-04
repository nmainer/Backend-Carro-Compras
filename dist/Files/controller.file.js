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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerFile = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const service_file_1 = require("./service.file");
const minSize_pipe_1 = require("../Pipes/minSize.pipe");
const Auth_guard_1 = require("../Guard/Auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ControllerFile = class ControllerFile {
    constructor(serviceFile) {
        this.serviceFile = serviceFile;
    }
    async addFile(id, file) {
        try {
            return await this.serviceFile.addFile(id, file);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                const status = error.getStatus();
                return {
                    statusCode: status,
                    message: error.message
                };
            }
        }
    }
};
exports.ControllerFile = ControllerFile;
__decorate([
    (0, common_1.Post)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.UploadedFile)(new minSize_pipe_1.MinSizeAndFormat())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ControllerFile.prototype, "addFile", null);
exports.ControllerFile = ControllerFile = __decorate([
    (0, swagger_1.ApiTags)("Files"),
    (0, common_1.Controller)("files/uploadImage"),
    __metadata("design:paramtypes", [service_file_1.ServiceFile])
], ControllerFile);
//# sourceMappingURL=controller.file.js.map