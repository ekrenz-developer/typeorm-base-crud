import { BaseCrudBaseParamsInterface } from './base-crud-base-params.interface';

export interface BaseCrudUpdateParamsInterface<TEntity>
  extends BaseCrudBaseParamsInterface<TEntity> {
  id: number;
  payload: Partial<TEntity>;
}
