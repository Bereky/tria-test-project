import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentService } from './department/department.service';
import { DepartmentModule } from './department/department.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService, DepartmentService],
})
export class AppModule {}
