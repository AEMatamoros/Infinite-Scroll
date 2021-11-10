import { Entity,Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { Publication } from "./Publication";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn() 
    id: number;
    @Column()
    tag: string;
    @CreateDateColumn()
    date_created: Date;
    @ManyToOne(() => Publication, publication => publication.tags)
    publication: Publication;
    
}
