import { PartialType } from '@nestjs/mapped-types';
import { CreateMangaTagDto } from './create-manga-tag.dto';

export class UpdateMangaTagDto extends PartialType(CreateMangaTagDto) {}
