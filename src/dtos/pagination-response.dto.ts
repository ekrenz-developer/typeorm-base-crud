// import { ApiProperty } from '@nestjs/swagger';
import {
  PaginationMetaInterface,
  PaginationResponseInterface,
} from '@/interfaces';

export class PaginationResponseDto<TEntity>
  implements PaginationResponseInterface<TEntity>
{
  // @ApiProperty({ isArray: true })
  readonly data: TEntity[];

  // @ApiProperty({ type: () => PaginationMetaDto })
  readonly meta: PaginationMetaInterface;

  constructor({ ...params }: PaginationResponseDto<TEntity>) {
    Object.assign(this, params);
  }
}
