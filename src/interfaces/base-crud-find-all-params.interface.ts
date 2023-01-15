import { BaseCrudBaseParamsInterface } from './base-crud-base-params.interface';
import { BaseCrudBaseFindParamsInterface } from './base-crud-base-find-params.interface';
import { PaginationOptionInterface } from './pagination-option.interface';

export interface BaseCrudFindAllParamsInterface<TEntity>
  extends BaseCrudBaseParamsInterface<TEntity>,
    BaseCrudBaseFindParamsInterface {
  paginationOptions?: PaginationOptionInterface;
}
