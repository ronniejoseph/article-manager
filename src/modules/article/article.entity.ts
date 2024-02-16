import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('articles')
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  title: string;

  @Column({ length: 225 })
  content: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @UpdateDateColumn()
  updated_date: Date;
}
