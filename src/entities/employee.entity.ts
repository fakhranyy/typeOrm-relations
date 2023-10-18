import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { Task } from "./task.entity";

@Entity()
export class Employee { 
    @PrimaryGeneratedColumn()
    id: number; // represent as a int(11) in database

    @Column()
    name: string; // represent as a varchar(255) in database

    // relation one to one with contactInfo
    @OneToOne(()=> ContactInfo, contactInfo => contactInfo.employee)
    contactInfo: ContactInfo;

    // relation one to Many with Task
    @OneToMany(()=> Task, task => task.employee )
    tasks: Task[];
    
}