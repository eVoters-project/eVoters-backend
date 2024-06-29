import { BaseEntityInterface } from "src/interface";
import { Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity implements BaseEntityInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'datetime'})
    created_at: Date;

    @CreateDateColumn({ type: 'datetime'})
    @UpdateDateColumn({ type: 'datetime' })
    updated_at: Date;
}