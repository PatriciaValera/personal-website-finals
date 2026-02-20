import { Injectable } from '@nestjs/common';
import { supabase } from '../config/supabase.config';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';

@Injectable()
export class GuestbookService {
  async getAllEntries() {
    const { data, error } = await supabase
      .from('guestbook_entries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }

  async createEntry(createGuestbookDto: CreateGuestbookDto) {
    const { data, error } = await supabase
      .from('guestbook_entries')
      .insert([{
        name: createGuestbookDto.name,
        email: createGuestbookDto.email || null,
        message: createGuestbookDto.message,
        created_at: new Date().toISOString(),
      }])
      .select();

    if (error) throw error;
    return data[0];
  }
}