"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./Middlewares/logger.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(logger_middleware_1.LoggerUsers);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map