import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ContentService {
  constructor(private readonly databaseserver: DatabaseService) {}

  create(createContentDto: Prisma.ContentCreateInput) {
    return this.databaseserver.content.create({
      data: createContentDto,
    });
  }

  findAll() {
    return this.databaseserver.content.findMany();
  }

  findOne(id: string) {
    return this.databaseserver.content.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateContentDto: Prisma.ContentUpdateInput) {
    return this.databaseserver.content.update({
      where: {
        id,
      },
      data: updateContentDto,
    });
  }

  remove(id: string) {
    return this.databaseserver.content.delete({
      where: {
        id,
      },
    });
  }
}
