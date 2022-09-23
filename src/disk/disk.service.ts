import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerSupply: PowerService){}

    getData() {
        console.log('giving 20 watt...')
        this.powerSupply.supplyPower(20)
        return 'data'
    }
}
