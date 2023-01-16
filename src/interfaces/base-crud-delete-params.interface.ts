import { BaseCrudBaseParamsInterface } from './base-crud-base-params.interface';

export interface BaseCrudDeleteParamsInterface<TEntity>
  extends BaseCrudBaseParamsInterface<TEntity> {
  id?: number;
}
