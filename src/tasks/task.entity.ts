import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { TaskStatus } from './task.model';

@Entity()
export class Task {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
