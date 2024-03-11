import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async getCustomers() {
    return await this.prisma.customer.findMany();
  }

  async getCustomerById(customerId: string) {
    return this.prisma.customer.findUnique({
      where: {
        id: customerId,
      },

      select: {
        id: true,
        name: true,
        address: true,
        email: true,
      },
    });
  }

  async createCustomer(
    dto: CustomerDto,
  ): Promise<{ data: CustomerDto[]; success: boolean; message: any }> {
    console.log(dto);
    try {
      // check if already exist
      const custExist = await this.prisma.customer.findFirst({
        where: {
          OR: [{ name: dto.name }, { email: dto.email }],
        },
      });

      if (custExist) {
        const errors = {
          success: false,
          message: 'Customer already exist',
        };
        throw new HttpException({ errors }, 400);
      }

      // create customer
      await this.prisma.customer.create({
        data: {
          ...dto,
        },
      });

      const custs = await this.prisma.customer.findMany();

      return { data: custs, success: true, message: 'Customer Created' };
    } catch (err) {
      if (err instanceof HttpException) {
        throw err; // Re-throw the HttpException with the same error message
      } else {
        throw new HttpException({ message: err.message }, err.getStatus());
      }
    }
  }

  async updateCustomer(
    customerId: string,
    dto: CustomerDto,
  ): Promise<{ data: CustomerDto[]; success: boolean; message: any }> {
    try {
      // update customer
      const update = await this.prisma.customer.update({
        where: {
          id: customerId,
        },
        data: {
          ...dto,
        },
        select: {
          id: true,
          name: true,
          address: true,
          email: true,
        },
      });

      const customers = await this.prisma.customer.findMany();

      return {
        data: customers,
        success: true,
        message: 'Customer updated successfully',
      };
    } catch (err) {
      throw new HttpException({ message: err.message }, null);
    }
  }

  async deleteCustomer(
    customerId: string,
  ): Promise<{ data: CustomerDto[]; success: boolean; message: any }> {
    try {
      const deleted = await this.prisma.customer.delete({
        where: {
          id: customerId,
        },
      });

      const customers = await this.prisma.customer.findMany();

      return {
        data: customers,
        success: true,
        message: 'Customer deleted successfully',
      };
    } catch (err) {
      throw new HttpException({ message: err.message }, err.getStatus());
    }
  }
}
