import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async getDepartments() {
    return await this.prisma.department.findMany();
  }

  getDepartmentById(departmentId: string) {
    return this.prisma.department.findUnique({
      where: {
        id: departmentId,
      },
    });
  }

  async createDepartment(
    dto: CreateDepartmentDto,
  ): Promise<CreateDepartmentDto> {
    const department = await this.prisma.department.create({
      data: {
        ...dto,
      },
    });

    return department;
  }

  async updateDepartment(departmentId: string, dto: UpdateDepartmentDto) {
    return await this.prisma.department.update({
      where: {
        id: departmentId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteDepartment(departmentId: string) {
    return await this.prisma.department.delete({
      where: {
        id: departmentId,
      },
    });
  }
}
