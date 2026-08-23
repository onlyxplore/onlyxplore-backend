import { Injectable, Logger } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import * as crypto from 'crypto';

@Injectable()
export class SupabaseService {
  private supabase: ReturnType<typeof createClient>;
  private readonly logger = new Logger(SupabaseService.name);

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase URL and Key must be provided in .env');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  /**
   * Uploads a base64 image to a Supabase bucket
   * @param base64String The base64 string (e.g., 'data:image/png;base64,...')
   * @param bucket The Supabase bucket name (e.g., 'uploads')
   * @param folder The folder inside the bucket (e.g., 'avatars')
   * @returns The public URL of the uploaded image
   */
  async uploadBase64Image(
    base64String: string,
    bucket: string,
    folder: string,
  ): Promise<string> {
    try {
      // 1. Extract mime type and base64 data
      const matches = base64String.match(/^data:([A-Za-z-+]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        throw new Error('Invalid base64 string format');
      }

      const mimeType = matches[1];
      const base64Data = matches[2];

      // 2. Determine file extension
      const extension = mimeType.split('/')[1] || 'png';

      // 3. Create a buffer from the base64 data
      const buffer = Buffer.from(base64Data, 'base64');

      // 4. Generate a unique filename
      const filename = `${folder}/${crypto.randomUUID()}.${extension}`;

      // 5. Upload to Supabase Storage
      const { error } = await this.supabase.storage
        .from(bucket)
        .upload(filename, buffer, {
          contentType: mimeType,
          upsert: true,
        });

      if (error) {
        this.logger.error(`Error uploading to Supabase: ${error.message}`);
        throw error;
      }

      // 6. Get the public URL
      const { data: urlData } = this.supabase.storage
        .from(bucket)
        .getPublicUrl(filename);

      return urlData.publicUrl;
    } catch (e) {
      const error = e as Error;
      this.logger.error(`Failed to upload base64 image: ${error.message}`);
      throw error;
    }
  }
}
