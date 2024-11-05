import { Column, DeleteDateColumn } from 'typeorm';

class Entity {
    // Should be string
    @Column({ type: "varchar" })
    name1: number;

    // Should be string | null
    @Column({ type: "varchar", nullable: true })
    name2: string;

    // Should be Date | null
    @DeleteDateColumn()
    deletedAt: Date;
}
