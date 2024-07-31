"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinSizeAndFormat = void 0;
const common_1 = require("@nestjs/common");
class MinSizeAndFormat extends common_1.ParseFilePipe {
    constructor() {
        super({
            validators: [
                new common_1.MaxFileSizeValidator({
                    maxSize: 200 * 1024,
                }),
                new common_1.FileTypeValidator({
                    fileType: /(jpg|jpeg|png|webp)$/,
                })
            ]
        });
    }
}
exports.MinSizeAndFormat = MinSizeAndFormat;
//# sourceMappingURL=minSize.pipe.js.map