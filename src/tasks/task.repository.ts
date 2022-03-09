import { EntityRepository, ObjectLiteral, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask({ title, description }: CreateTaskDto): Promise<Task> {
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }

  async getTasks({ status, search }: GetTasksFilterDto): Promise<Task[]> {
    const query: ObjectLiteral = { where: {} };
    if (status) {
      query.where['status'] = { $eq: status };
    }

    if (search) {
      query.where['$or'] = [
        { title: { $regex: search } },
        { description: { $regex: search } },
      ];
    }
    return await this.find(query);
  }
}
