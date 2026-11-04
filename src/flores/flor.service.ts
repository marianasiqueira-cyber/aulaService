
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flor } from './flor.entity';

@Injectable()
export class FlorService {

    constructor(
        @InjectRepository(Flor)
        private florRepository: Repository<Flor>,
    ) {}

  
    listar(): Promise<Flor[]> {
        return this.florRepository.find();
    }

    async buscarPorId(id: number): Promise<Flor> {
        const flor = await this.florRepository.findOneBy({ id });

        if (!flor) {
            throw new NotFoundException('Flor não encontrada');
        }

        return flor;
    }

    cadastrar(dados: Flor): Promise<Flor> {
        const flor = this.florRepository.create(dados);
        return this.florRepository.save(flor);
    }

  
    async atualizar(id: number, dados: Flor): Promise<Flor> {
        const flor = await this.buscarPorId(id);

        Object.assign(flor, dados);

        return this.florRepository.save(flor);
    }

    async remover(id: number): Promise<void> {
        const flor = await this.buscarPorId(id);

        await this.florRepository.remove(flor);
    }
}

