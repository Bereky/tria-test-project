import {
  HttpException,
  Injectable,
  NotImplementedException,
  Res,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { error } from 'console';

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

      select: {
        id: true,
        name: true,
        description: true,
        managingDepartmentId: true,
        underManagement: true,
        managingDepartment: true,
      },
    });
  }

  async createDepartment(
    dto: CreateDepartmentDto,
  ): Promise<{ data: CreateDepartmentDto[]; success: boolean; message: any }> {
    console.log(dto);
    try {
      // check if already exist
      const depExist = await this.prisma.department.findFirst({
        where: {
          OR: [{ name: dto.name }, { description: dto.description }],
        },
      });

      if (depExist) {
        const errors = {
          success: false,
          message: 'Department already exist',
        };
        throw new HttpException({ errors }, 400);
      }

      if (!dto.managingDepartmentId) {
        // department without manager
        const department = await this.prisma.department.create({
          data: {
            name: dto.name,
            description: dto.description,
            managingDepartmentId: null,
          },
        });
      } else {
        // department with manager
        await this.prisma.department.create({
          data: {
            ...dto,
          },
        });
      }

      const depts = await this.prisma.department.findMany();

      return { data: depts, success: true, message: 'Department Created' };
    } catch (err) {
      console.log(err);
      if (err instanceof HttpException) {
        throw err; // Re-throw the HttpException with the same error message
      } else {
        throw new HttpException({ message: err.message }, err.getStatus());
      }
    }
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

  async deleteDepartment(
    departmentId: string,
  ): Promise<{ success: boolean; message: any }> {
    try {
      const deleted = await this.prisma.department.delete({
        where: {
          id: departmentId,
        },
      });

      return { success: true, message: 'Department deleted successfully' };
    } catch (err) {
      throw new HttpException({ message: err.message }, err.getStatus());
    }
  }
}
