import { BaseCrudBaseParamsInterface } from './base-crud-base-params.interface';
import { BaseCrudBaseFindParamsInterface } from './base-crud-base-find-params.interface';
import { PaginationOptionsInterface } from './pagination-options.interface';

export interface BaseCrudFindAllParamsInterface<TEntity>
  extends BaseCrudBaseParamsInterface<TEntity>,
    BaseCrudBaseFindParamsInterface {
  paginationOptions?: PaginationOptionsInterface;
}
