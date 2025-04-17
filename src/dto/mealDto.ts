import { IsBoolean, IsNotEmpty, IsNumber, IsString, } from "class-validator";

export class MealDto{

    
    id: number;

    name: string;
  category: string;
  image: string;
  price: number;
  topPick: boolean;

}