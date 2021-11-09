import { Entity,Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Publication } from "./Publication";
@Entity()
export class File {
    @PrimaryGeneratedColumn()//("int") Default 
    id: number;
    @Column()//("varchar") Default
    file_name: string;
    @Column({default:() => 'CURRENT_TIMESTAMP'})
    date_created: Date;
    @ManyToOne(() => Publication, publication => publication.files)
    publication: Publication;
    
}
