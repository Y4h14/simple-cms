import { Controller, Get, Query } from '@nestjs/common';
import { DiscoveryService } from './discovery.service';
import { Public } from 'src/auth/public';



@Controller('discovery')
export class DiscoveryController {
  constructor(private readonly discoveryService: DiscoveryService) {}

  @Public()
  @Get()
  sreach(@Query('q') q: string) {
    return this.discoveryService.search(q);
  }
}
