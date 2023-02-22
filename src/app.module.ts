import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: { host: 'redis', port: 6379 },
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
