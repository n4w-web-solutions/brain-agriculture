import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Check,
} from "typeorm";

@Entity("producers")
@Check(`"agricultural_area" + "vegetation_area" <= "total_area"`)
export class Producer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    cpf_cnpj!: string;

    @Column()
    name!: string;

    @Column()
    farm_name!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @Column("decimal", { precision: 10, scale: 2 })
    total_area!: number;

    @Column("decimal", { precision: 10, scale: 2 })
    agricultural_area!: number;

    @Column("decimal", { precision: 10, scale: 2 })
    vegetation_area!: number;

    @Column("text", { array: true }) // Define a coluna como um array de texto
    crops!: string[];

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
