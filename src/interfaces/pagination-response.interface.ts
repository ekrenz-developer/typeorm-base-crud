import { PaginationMetaInterface } from './pagination-meta.interface';

export interface PaginationResponseInterface<TEntity> {
  data: TEntity[];
  meta: PaginationMetaInterface;
}
