declare const configureCloudinary: {
    provide: string;
    useFactory: () => import("cloudinary").ConfigOptions;
};
export default configureCloudinary;
