import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Meeting {
    @PrimaryGeneratedColumn()
    id: number; // represent as a int(11) in database

    @Column()
    zoomurl: string; // represent as a varchar(255) in database

    @ManyToMany(()=> Employee , employee => employee.meetings) // many to many relation need to 3rd class to do its job
    attendees: Employee[];

}