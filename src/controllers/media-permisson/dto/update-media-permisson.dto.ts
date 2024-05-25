import { PartialType } from '@nestjs/mapped-types';
import { CreateMediaPermissonDto } from './create-media-permisson.dto';

export class UpdateMediaPermissonDto extends PartialType(CreateMediaPermissonDto) {}
