import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ContentService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createContentDto: Prisma.ContentCreateInput) {
    return this.databaseService.content.create({
      data: createContentDto,
    });
  }

  findAll() {
    return this.databaseService.content.findMany();
  }

  findOne(id: string) {
    return this.databaseService.content.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateContentDto: Prisma.ContentUpdateInput) {
    return this.databaseService.content.update({
      where: {
        id,
      },
      data: updateContentDto,
    });
  }

  remove(id: string) {
    return this.databaseService.content.delete({
      where: {
        id,
      },
    });
  }
}
