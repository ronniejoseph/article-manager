import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  getAllArticles(): number[] {
    return [1, 2, 3];
  }
}
