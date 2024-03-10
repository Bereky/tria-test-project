import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getDepartments() {
    return this.customerService.getCustomers();
  }

  @Get(':id')
  getCustomerById(
    @Param('id')
    customerId: string,
  ) {
    return this.customerService.getCustomerById(customerId);
  }

  @Post()
  createCustomer(@Body() dto: CustomerDto) {
    return this.customerService.createCustomer(dto);
  }

  @Put(':id')
  updatCustomer(
    @Body() dto: CustomerDto,
    @Param('id')
    customerId: string,
  ) {
    return this.customerService.updateCustomer(customerId, dto);
  }

  @Delete(':id')
  deleteCustomer(
    @Param('id')
    customerId: string,
  ) {
    return this.customerService.deleteCustomer(customerId);
  }
}
