import { Module } from '@nestjs/common';
import { UserModule } from './Users/user.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [UserModule,ProductsModule,AuthModule],
  providers: [],
  controllers:[]
})
export class AppModule {}
