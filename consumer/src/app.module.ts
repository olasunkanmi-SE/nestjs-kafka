import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '/nestjs-kafka/.env' })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
