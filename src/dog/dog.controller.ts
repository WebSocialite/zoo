import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, query} from "express";

@Controller('dog')
export class DogController {

    constructor (private readonly dogService: DogService ) {}

    @Get()
    public getHello(): string {
        return this.dogService.getHello();
    }

    @Get('greet/:Id')
    public introduce(@Param() params: any, @Query() query: any): string {
        console.log('params', params);
        console.log('query:', query);
        return this.dogService.introduce();
    }

}
