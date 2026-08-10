export declare class SupabaseService {
    private supabase;
    private readonly logger;
    constructor();
    uploadBase64Image(base64String: string, bucket: string, folder: string): Promise<string>;
}
