
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Flor } from './flores.entity.js';
import { FlorService } from './flor.service.js';
@Module({
    imports: [
        TypeOrmModule.forFeature([Flor])
    ],
    providers: [FlorService],
    exports: [FlorService]
})
export class FlorModule {}
