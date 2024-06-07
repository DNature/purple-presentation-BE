import { Page } from 'src/modules/page/entities/page.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  data: string;

  @ManyToOne(() => Page, (page) => page.contents, { onDelete: 'CASCADE' })
  page: Page;

  @Column({ default: 0 })
  x: number;

  @Column({ default: 0 })
  y: number;
}
