import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  getAllArticles() {
    return [1, 2, 3, 4];
  }
}
