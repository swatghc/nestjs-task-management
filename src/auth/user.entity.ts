import { Column, Entity, Index, ObjectIdColumn, Unique } from 'typeorm';

@Unique(['username'])
@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column({ unique: true })
  @Index({ unique: true })
  username: string;

  @Column()
  password: string;
}
