import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdModule } from './prod/prod.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://AkashKaintura:LPA3gHXaNXwFEugk@cluster0.v4umw92.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
