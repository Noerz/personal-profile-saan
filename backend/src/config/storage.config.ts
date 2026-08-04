import { registerAs } from '@nestjs/config';
import * as path from 'path';

export default registerAs('storage', () => ({
  uploadDir: process.env.UPLOAD_DIR || 'uploads',
  uploadPath: path.join(process.cwd(), process.env.UPLOAD_DIR || 'uploads'),
  maxImageSize: parseInt(process.env.MAX_FILE_SIZE_IMAGE || '5242880', 10), // 5MB
  maxDocumentSize: parseInt(process.env.MAX_FILE_SIZE_DOCUMENT || '10485760', 10), // 10MB
  allowedImageMimes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
  allowedDocumentMimes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
}));
