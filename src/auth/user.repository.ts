import { ConflictException } from '@nestjs/common';
import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser({ username, password }: AuthCredentialsDto): Promise<void> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.create({ username, password: hashedPassword });
    if (await this.findOne({ username: username })) {
      throw new ConflictException('Duplicate user name');
    }
    await this.save(user);
  }
}
