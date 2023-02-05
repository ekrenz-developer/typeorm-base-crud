// import { ApiProperty } from '@nestjs/swagger';
import {
  PaginationMetaParamsInterface,
  PaginationMetaInterface,
} from '@/interfaces';

export class PaginationMetaDto implements PaginationMetaInterface {
  // @ApiProperty()
  readonly page: number;

  // @ApiProperty()
  readonly take: number;

  // @ApiProperty()
  readonly itemCount: number;

  // @ApiProperty()
  readonly pageCount: number;

  // @ApiProperty()
  readonly hasPreviousPage: boolean;

  // @ApiProperty()
  readonly hasNextPage: boolean;

  constructor({
    paginationOptions: { page, take },
    itemCount,
  }: PaginationMetaParamsInterface) {
    this.page = page;
    this.take = take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
