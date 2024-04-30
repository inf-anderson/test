import { BadRequestException, Injectable } from '@nestjs/common';
import { OperationDto } from './operation.dto';

@Injectable()
export class AppService {
  calculateValues(operationDto: OperationDto): number {
    try {
      // validar si se va a dividir por cero

      if (operationDto.valorA === 0) {
        throw new BadRequestException('No se puede dividir por cero');
      }

      const operation = (operationDto.valorB / operationDto.valorA).toFixed(2);

      return parseFloat(operation);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
