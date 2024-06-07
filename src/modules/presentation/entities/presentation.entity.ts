import { Page } from 'src/modules/page/entities/page.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Presentation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @OneToMany(() => Page, (page) => page.presentation, { onDelete: 'CASCADE' })
  pages: Page[];
}
