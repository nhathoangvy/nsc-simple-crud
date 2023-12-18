import { applyDecorators } from '@nestjs/common'
import {
  Expose,
  Type
} from 'class-transformer'
import {
  IsOptional,
  ValidateNested,
} from 'class-validator'

export function CheckClassOptional(dto: any) {
  return applyDecorators(
    IsOptional(),
    ValidateNested(),
    Type(() => dto),
    Expose(),
  )
}