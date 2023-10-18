import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // relation Many to one with employee
    // 3rd param means that if this employee got deleted SET NULL to this record (employee) and let the tasks still exist 
    @ManyToOne( ()=> Employee , employee => employee.tasks, {onDelete: 'SET NULL'})
    employee: Employee


}