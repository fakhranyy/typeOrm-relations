import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";

@Entity()
export class Employee { 
    @PrimaryGeneratedColumn()
    id: number; // represent as a int(11) in database

    @Column()
    name: string; // represent as a varchar(255) in database

    @OneToOne(()=> ContactInfo, contactInfo => contactInfo.employee)
    contactInfo: ContactInfo;
    
}