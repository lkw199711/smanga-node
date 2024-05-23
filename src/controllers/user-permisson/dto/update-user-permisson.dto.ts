import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPermissonDto } from './create-user-permisson.dto';

export class UpdateUserPermissonDto extends PartialType(CreateUserPermissonDto) {}
