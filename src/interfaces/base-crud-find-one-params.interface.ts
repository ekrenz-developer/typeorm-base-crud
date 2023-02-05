import { BaseCrudBaseParamsInterface } from './base-crud-base-params.interface';
import { BaseCrudBaseFindParamsInterface } from './base-crud-base-find-params.interface';

export interface BaseCrudFindOneParamsInterface<TEntity>
  extends BaseCrudBaseParamsInterface<TEntity>,
    BaseCrudBaseFindParamsInterface {
  id?: number;
}
