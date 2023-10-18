import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class ContactInfo{

    @PrimaryGeneratedColumn()
    id: number; // represent as a int(11) in database

    @Column()
    name: string; // represent as a varchar(255) in database

    @Column({nullable: true})
    phone: string;

    // relation one to one with employee
    @OneToOne( ()=> Employee, employee => employee.contactInfo)
    @JoinColumn() // JoinColmn tells us where is the relationship id created
                  // in the other entity it'll be has a employeeId column 
 // المكان اللي هحط فيه الجوين هو المكان اللي هيحتوي علي relation id & FK 
    employee: Employee;

}