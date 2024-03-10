import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentService } from './department/department.service';
import { DepartmentModule } from './department/department.module';
import { ConfigModule } from '@nestjs/config';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    DepartmentModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService, DepartmentService, CustomerService],
})
export class AppModule {}
