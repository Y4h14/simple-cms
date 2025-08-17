import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { Prisma } from '@prisma/client';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  create(@Body() createContentDto: Prisma.ContentCreateInput) {
    return this.contentService.create(createContentDto);
  }

  @Get()
  findAll() {
    return this.contentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContentDto: Prisma.ContentUpdateInput,
  ) {
    return this.contentService.update(id, updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentService.remove(id);
  }
}
