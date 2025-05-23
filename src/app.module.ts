import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/user'
import { meal} from './typeorm/meal';
import { MealModule } from './meals/meals.module';

@Module({
  imports: [MealModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'sys',
    entities: [meal],
    synchronize: true,

  })],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
