import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Get('/')
  getAllArticles() {
    return this.articleService.getAllArticles();
  }
}
