import { Entity,Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { File } from "./Files";
import { Tag } from "./Tags";

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
    @OneToMany(() => File, file => file.publication)
    files: File[];
    @OneToMany(() => Tag, tag => tag.publication)
    tags: Tag[];
}
