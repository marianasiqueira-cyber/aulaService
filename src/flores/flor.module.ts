
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Flor } from './flor.entity';
import { FlorService } from './flor.service';
@Module({
    imports: [
        TypeOrmModule.forFeature([Flor])
    ],
    providers: [FlorService],
    exports: [FlorService]
})
export class FlorModule {}
