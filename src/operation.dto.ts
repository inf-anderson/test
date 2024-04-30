import { IsNotEmpty, IsNumber } from 'class-validator';

export class OperationDto {
  @IsNotEmpty({ message: 'Debe digitar el primer valor' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 },
    { message: 'El valor A debe ser un número' },
  )
  valorA: number;

  @IsNotEmpty({ message: 'Debe digitar el segundo valor' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 },
    { message: 'El valor B debe ser un número' },
  )
  valorB: number;
}
