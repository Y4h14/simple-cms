import { Controller, Get, Query } from '@nestjs/common';
import { DiscoveryService } from './discovery.service';

@Controller('discovery')
export class DiscoveryController {
  constructor(private readonly discoveryService: DiscoveryService) {}

  @Get()
  sreach(@Query('q') q: string) {
    return this.discoveryService.search(q);
  }
}
