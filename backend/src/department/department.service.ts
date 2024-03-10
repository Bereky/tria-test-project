import {
  HttpException,
  Injectable,
  NotImplementedException,
  Res,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DepartmentDto } from './dto/department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async getDepartments() {
    return await this.prisma.department.findMany();
  }

  async getDepartmentById(departmentId: string) {
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
    dto: DepartmentDto,
  ): Promise<{ data: DepartmentDto[]; success: boolean; message: any }> {
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

  async updateDepartment(
    departmentId: string,
    dto: DepartmentDto,
  ): Promise<{ data: DepartmentDto; success: boolean; message: any }> {
    try {
      if (!dto.managingDepartmentId) {
        // department without manager
        const update = await this.prisma.department.update({
          where: {
            id: departmentId,
          },
          data: {
            name: dto.name,
            description: dto.description,
            managingDepartmentId: null,
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

        return {
          data: update,
          success: true,
          message: 'Department updated successfully',
        };
      } else {
        // department with manager
        const update = await this.prisma.department.update({
          where: {
            id: departmentId,
          },
          data: {
            ...dto,
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

        return {
          data: update,
          success: true,
          message: 'Department updated successfully',
        };
      }
    } catch (err) {
      throw new HttpException({ message: err.message }, null);
    }
  }

  async deleteDepartment(
    departmentId: string,
  ): Promise<{ success: boolean; message: any }> {
    try {
      const deleted = await this.prisma.department.delete({
        where: {
          id: departmentId,
        },
        select: {
          underManagement: true,
        },
      });

      // propagate the change to under managements
      deleted.underManagement.map(async (item) => {
        await this.prisma.department.update({
          where: {
            id: item.id,
          },
          data: {
            managingDepartmentId: null,
          },
        });
      });

      return { success: true, message: 'Department deleted successfully' };
    } catch (err) {
      throw new HttpException({ message: err.message }, err.getStatus());
    }
  }
}
