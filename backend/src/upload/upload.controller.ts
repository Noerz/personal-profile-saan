import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { multerConfig } from '../common/config/multer.config';
import type { Request } from 'express';

@ApiTags('Upload')
@Controller('upload')
@ApiBearerAuth('JWT-Auth')
export class UploadController {
  @Post()
  @ApiOperation({ summary: 'Upload an image file', description: 'Uploads an image to the server and returns its public URL.' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'Image file to upload (jpeg, png, webp, gif, max 5MB)',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'File uploaded successfully' })
  @ApiResponse({ status: 400, description: 'No file uploaded or invalid format' })
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    if (!file) {
      throw new BadRequestException('No file uploaded or invalid file format.');
    }

    // Build public URL dynamically
    const protocol = req.protocol;
    const host = req.get('host');
    const fileUrl = `${protocol}://${host}/uploads/${file.filename}`;

    return {
      success: true,
      data: {
        filename: file.filename,
        mimetype: file.mimetype,
        size: file.size,
        url: fileUrl,
      },
    };
  }
}
