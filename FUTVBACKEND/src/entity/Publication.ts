import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Publication {
    @PrimaryGeneratedColumn()//("int") Default 
    id: number;
    @Column()//("varchar") Default
    title: string;
    @Column("text")
    description: string;
    @Column({default:() => 'CURRENT_TIMESTAMP'})
    date_created: Date;
}
