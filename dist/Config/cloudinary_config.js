"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "./.env.development" });
const configureCloudinary = {
    provide: "CLOUDINARY",
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
    }
};
exports.default = configureCloudinary;
//# sourceMappingURL=cloudinary_config.js.map