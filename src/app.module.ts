import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
const getConfig = (): TypeOrmModuleOptions => ({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'test',
  keepConnectionAlive: true,
  autoLoadEntities: true,
});

const getCosmosDbConfig = (): TypeOrmModuleOptions => ({
  type: 'mongodb',
  url: 'mongodb://task-db:ybMchD74sf8xyPgxqMJLkmD9YG5XxlPcb1FBoAaHj6Zo7fyRmneZVqxX6TahQa8JT8gbP9FqTxChEqEqqbrAXw==@task-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb',
  database: 'test-db',
  entities: [__dirname + '/../**/*.entity.js'],
  ssl: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(getConfig()), AuthModule],
  providers: [],
})
export class AppModule {}
