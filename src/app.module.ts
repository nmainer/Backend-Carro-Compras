import { Module } from '@nestjs/common';
import { UserModule } from './Users/user.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';
import configureTypeOrm from "./Config/typeorm";
import { CategorieModule } from './Categories/categorie.module';
import { ModuleOrder } from './Order/Order.module';
import { ModuleFile } from './Files/module.file';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configureTypeOrm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm'),
    }),
    UserModule,
    ModuleOrder,
    ProductsModule,
    AuthModule,
    CategorieModule,
    ModuleFile,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h' },
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
