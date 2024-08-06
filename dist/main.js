"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./Middlewares/logger.middleware");
const common_1 = require("@nestjs/common");
const express_openid_connect_1 = require("express-openid-connect");
const Auth0_config_1 = require("./Config/Auth0_config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, express_openid_connect_1.auth)(Auth0_config_1.config));
    app.use(logger_middleware_1.LoggerUsers);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map