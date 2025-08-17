import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DiscoveryService {
  constructor(private readonly databaseService: DatabaseService) {}

  search(query: string) {
    return this.databaseService.content.findMany({
      where: {
        title: {
          search: query,
        },
        description: {
          search: query,
        },
      },
    });
  }
}
