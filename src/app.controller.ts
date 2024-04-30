import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OperationDto } from './operation.dto';

@Controller('operation')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  calculateValues(@Body() operationDto: OperationDto): number {
    return this.appService.calculateValues(operationDto);
  }
}
