import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class SeoMetadataDto {
  @ApiPropertyOptional({ description: 'SEO Meta Title' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  metaTitle?: string;

  @ApiPropertyOptional({ description: 'SEO Meta Description' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  metaDesc?: string;

  @ApiPropertyOptional({ description: 'SEO Keywords (comma separated)' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  keywords?: string;

  @ApiPropertyOptional({ description: 'Open Graph Image URL' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  ogImage?: string;

  @ApiPropertyOptional({ description: 'Canonical URL' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  canonical?: string;

  @ApiPropertyOptional({ description: 'Prevent search engines from indexing this page' })
  @IsOptional()
  @IsBoolean()
  noIndex?: boolean;
}
