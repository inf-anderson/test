import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ResponseInterceptor } from './response.interceptor';
import { HttpExceptionFilter } from './exception.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: false,
        forbidNonWhitelisted: true,
        transform: true,
        disableErrorMessages: true,
        exceptionFactory: (errors) => {
          throw new BadRequestException(
            errors[0].constraints[Object.keys(errors[0].constraints)[0]],
          );
        },
        stopAtFirstError: false,
      }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
