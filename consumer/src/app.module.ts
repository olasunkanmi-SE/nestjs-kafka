import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dBConfig } from 'ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '/nestjs-kafka/.env' }),
    TypeOrmModule.forRoot({ ...dBConfig, autoLoadEntities: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
