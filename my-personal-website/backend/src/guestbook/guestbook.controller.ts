import { Controller, Get, Post, Body } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';

@Controller('api/guestbook')
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  @Get()
  async getAllEntries() {
    return this.guestbookService.getAllEntries();
  }

  @Post()
  async createEntry(@Body() createGuestbookDto: CreateGuestbookDto) {
    return this.guestbookService.createEntry(createGuestbookDto);
  }
}