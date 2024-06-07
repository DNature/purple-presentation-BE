import { Content } from 'src/modules/content/entities/content.entity';
import { Presentation } from 'src/modules/presentation/entities/presentation.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pageNumber: number;

  @ManyToOne(() => Presentation, (presentation) => presentation.pages)
  presentation: Presentation;

  @OneToMany(() => Content, (content) => content.page)
  contents: Content[];
}
