import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentDto } from './dto/department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  @Get()
  getDepartments() {
    return this.departmentService.getDepartments();
  }

  @Get(':id')
  getDepartmentById(
    @Param('id')
    departmentId: string,
  ) {
    return this.departmentService.getDepartmentById(departmentId);
  }

  @Post()
  createDepartment(@Body() dto: DepartmentDto) {
    return this.departmentService.createDepartment(dto);
  }

  @Put(':id')
  updatDepartment(
    @Body() dto: DepartmentDto,
    @Param('id')
    departmentId: string,
  ) {
    return this.departmentService.updateDepartment(departmentId, dto);
  }

  @Delete(':id')
  deleteDepartment(
    @Param('id')
    departmentId: string,
  ) {
    console.log(departmentId);
    return this.departmentService.deleteDepartment(departmentId);
  }
}
