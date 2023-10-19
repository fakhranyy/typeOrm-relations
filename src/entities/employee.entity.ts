import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { Task } from "./task.entity";

@Entity()
export class Employee { 
    @PrimaryGeneratedColumn()
    id: number; // represent as a int(11) in database

    @Column()
    name: string; // represent as a varchar(255) in database

    // @Column()
     @ManyToOne(()=> Employee, employee => employee.directReports, {onDelete :'SET NULL'} ) // many employees mapped to one manger
     manger: Employee; // self referencing because the two sides of relation are in the same class , side 1 

     @OneToMany(() => Employee , employee => employee.manger) 
    directReports: Employee; // self referencing because the two sides of relation are in the same class , side 2 

    // relation one to one with contactInfo
    @OneToOne(()=> ContactInfo, contactInfo => contactInfo.employee)
    contactInfo: ContactInfo;

    // relation one to Many with Task
    @OneToMany(()=> Task, task => task.employee )
    tasks: Task[];
    
} 