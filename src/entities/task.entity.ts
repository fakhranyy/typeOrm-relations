import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number; // represent as a int(11) in database

    @Column({nullable: true})
    name: string; // represent as a varchar(255) in database

    // relation Many to one with employee
    // 3rd param means that if this employee got deleted SET NULL to this record (employee) and let the tasks still exist 
    @ManyToOne( ()=> Employee , employee => employee.tasks, {onDelete: 'SET NULL'})
    employee: Employee


}