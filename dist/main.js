"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./Middlewares/logger.middleware");
const common_1 = require("@nestjs/common");
const express_openid_connect_1 = require("express-openid-connect");
const Auth0_config_1 = require("./Config/Auth0_config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, express_openid_connect_1.auth)(Auth0_config_1.config));
    app.use(logger_middleware_1.LoggerUsers);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true
    }));
    const sweaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle("Demo Nest")
        .setDescription("Api generada con Nest referida al modulo N° 4 de la carrera Full-Stack")
        .setVersion("^7.4.0")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, sweaggerConfig, { deepScanRoutes: true });
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map