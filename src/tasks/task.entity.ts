import { TaskStatus } from './task-status.enum';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Task {
  @ObjectIdColumn()
  _id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
