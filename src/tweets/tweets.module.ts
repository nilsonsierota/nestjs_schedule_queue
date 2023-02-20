import { Module, CacheModule } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tweet } from './entities/tweet.entity';
import { TweetsCountService } from './tweets-count/tweets-count.service';

@Module({
  imports: [CacheModule.register(), SequelizeModule.forFeature([Tweet])],
  controllers: [TweetsController],
  providers: [TweetsService, TweetsCountService],
})
export class TweetsModule {}
