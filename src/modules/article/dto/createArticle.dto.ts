import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'The Article Should Have a title' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty()
  @Length(3)
  content: string;
}
