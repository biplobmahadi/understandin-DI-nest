import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {}

    compute(a: number, b: number) {
        console.log('using 15 watt...')
        this.powerService.supplyPower(15)
        return a + b;
    }
}
