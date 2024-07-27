import { Module } from '@nestjs/common';
import { UserModule } from './Users/user.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';
import configureTypeOrm from "./Config/typeorm";
import { CategorieModule } from './Categories/categorie.module';
import { ModuleOrder } from './Order/Order.module';

@Module({
  imports: [UserModule,ModuleOrder, ProductsModule,AuthModule,CategorieModule, TypeOrmModule.forRootAsync({

    inject : [ConfigService] ,
    useFactory : (configService : ConfigService) => configService.get("typeorm")
  }),

  ConfigModule.forRoot({
    isGlobal:true ,
    load:[configureTypeOrm],
  })
],

  providers: [],
  controllers:[]
})
export class AppModule {}
