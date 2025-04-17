import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { meal } from "../typeorm/meal";
import { Repository } from "typeorm";

@Injectable()
export class MealsService {
  constructor(
    @InjectRepository(meal)
    private mealsRepository: Repository<meal>,
  ) {}

  async getMeals(): Promise<meal[]> {
    return await this.mealsRepository.find();
  }

  async getTopPicks(): Promise<meal[]> {
    return this.mealsRepository.find({
      where: { topPick: true },
    });
  }

  async addMeal(mealData: meal): Promise<meal> {
    const newMeal = this.mealsRepository.create(mealData);
    return await this.mealsRepository.save(newMeal);
  }

  async deleteMeal(id: number): Promise<void> {
    await this.mealsRepository.delete(id);
  }

  async update(id: number, updateMealDto: meal): Promise<meal> {
    const meal = await this.mealsRepository.findOne({ where: { id } });

    if (!meal) {
      throw new NotFoundException(`Meal with ID ${id} not found`);
    }

    const updated = Object.assign(meal, updateMealDto);
    console.log(this.mealsRepository.save(updated));
    return this.mealsRepository.save(updated);
  }
}



// import { Injectable } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
// import { meal } from "../typeorm/meal"; // Updated to PascalCase
// import { Repository } from "typeorm";

// @Injectable()
// export class MealsService {
//   constructor(
//     @InjectRepository(meal) // Updated to match PascalCase entity
//     private mealsRepository: Repository<meal>,
//   ) {}

//   async getMeals(): Promise<meal[]> {
//     try {
//       return await this.mealsRepository.find();
//     } catch (error) {
//       throw new Error(`Failed to fetch meals: ${error.message}`);
//     }
//   }

//   async getTopPicks(): Promise<meal[]> {
//     try {
//       return await this.mealsRepository.find({
//         where: { topPick: true },
//       });
//     } catch (error) {
//       throw new Error(`Failed to fetch top picks: ${error.message}`);
//     }
//   }

//   async addMeal(mealData: meal): Promise<meal> {
//     try {
//       const newMeal = this.mealsRepository.create(mealData);
//       return await this.mealsRepository.save(newMeal);
//     } catch (error) {
//       throw new Error(`Failed to add meal: ${error.message}`);
//     }
//   }
// }