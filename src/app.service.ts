import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactInfo } from './entities/contact-info.entity';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { Task } from './entities/task.entity';
import { Meeting } from './entities/meeting.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ContactInfo) private contactRepo: Repository<ContactInfo>,
    @InjectRepository(Employee) private empRepo: Repository<Employee>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
    @InjectRepository(Meeting) private MeetingRepo: Repository<Meeting>,
  ){}

  async seed(){
    // create dosen't save in db , to save it to db we need to implement the 2nd line
    const ceo = this.empRepo.create({ name: 'mr. ziad', });   // this way is shorter than another way
    // const ceo = new Employee(); // tall and ugly
    // ceo.name = 'Mr. Ceo'
    await this.empRepo.save(ceo);

    const ceoContactInfo = this.contactRepo.create({
      email: 'Ziad@gmail.com',
      //  employeeId: ceo.id  // not recommended as relation
      });
    ceoContactInfo.employee = ceo; // recommended as relation
    await this.contactRepo.save(ceoContactInfo);

    const manger = this.empRepo.create({
      name: 'Zrzr',
      manger: ceo // this is another way of inserting data within relation
    })

    const task1 = this.taskRepo.create({ name: 'hire people'});
    await this.taskRepo.save(task1);
    const task2 = this.taskRepo.create({ name: 'present to ceo'});
    await this.taskRepo.save(task2);
    
    manger.tasks = [task1, task2];

    const meeting1 = this.MeetingRepo.create({ zoomurl: 'meeting.com'});
    meeting1.attendees = [ceo];
    await this.MeetingRepo.save(meeting1);

    manger.meetings = [meeting1];
    await this.empRepo.save(manger);
  }


   getEmployeeById(id: number){
    console.log(id);
     return this.empRepo.findOne({where: {id: id}, relations: ['manger','tasks','directReports','contactInfo', 'meetings'] }) // find() => select all
  }

  getHello(): string {
    return 'Hello World!';
  }
}
