import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateQuizDto } from './dto/createArticle.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Get('/')
  getAllArticles() {
    return this.articleService.getAllArticles();
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createArticle(@Body() articleData: CreateQuizDto) {
    return { data: articleData };
  }
}
