import {Controller, Get} from '@nestjs/common';

const availableItems = [
    'milk',
    'pasta',
    'eggs',
    'meat',
    'bread',
    'coffee',
    'tea',
    'sugar',
    'rice',
    'oil',
    'salad',
    'soup',
    'cheese',
    'meat',
    'fish',
    'tomato',
    'tomato soup',
];

@Controller('items')
export class ItemsController {

    @Get('list')
    getRandomFact(): string[] {
        return availableItems;
    }
}
