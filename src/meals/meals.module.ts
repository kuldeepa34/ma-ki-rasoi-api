import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MealController } from "./meals.controller";
import { MealsService } from "./meals.service";
import { meal } from "../typeorm/meal"; // Ensure the entity is properly imported

@Module({
  imports: [TypeOrmModule.forFeature([meal])], // Register the repository for the meal entity
  controllers: [MealController],
  providers: [MealsService],
})
export class MealModule {}
