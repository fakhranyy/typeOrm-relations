import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Meeting } from './entities/meeting.entity';
import { Task } from './entities/task.entity';
import { ContactInfo } from './entities/contact-info.entity';

@Module({  // TypeOrmModule provides a list of the entities that we want to be able to access within our  service layer , let me use the entiity as Repo within construcor(){}
  imports: [DatabaseModule, ConfigModule.forRoot() , TypeOrmModule.forFeature([Employee, Meeting, Task, ContactInfo])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
