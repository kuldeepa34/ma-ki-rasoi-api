import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealDto } from 'src/dto/mealDto';

@Controller('/')
export class MealController {
  constructor(private mealServies: MealsService) {}

  @Get('meals')
  getMeals() {
    return this.mealServies.getMeals();
    // return "asfsfF";
    // return "helo"
  }

  @Get('toppicks')
  getTopPicks() {
    return this.mealServies.getTopPicks();
    // return "asfsfF";
    // return "helo"
  }

  @Post('addmeal')
  addMeal(@Body() mealData: MealDto) {
   // console.log(mealData);
    return this.mealServies.addMeal(mealData);
  }

  @Delete('delete/:id')
  deleteMeal(@Param('id') id: string) {
    return this.mealServies.deleteMeal(+id); // +id converts to number
  }

  @Put('meals/:id')
updateMeal(@Param('id') id: string, @Body() updateMealDto: MealDto) {
  return this.mealServies.update(+id, updateMealDto); // +id converts to number
}

}
