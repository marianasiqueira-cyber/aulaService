
import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('flores')
export class Flor {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column({ length: 100 })
    especie!: string;

    @Column({ length: 50 })
    cor!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco!: number;

    @Column({ type: 'int' })
    quantidade!: number;

    @Column({ default: true })
    disponivel!: boolean;
}
