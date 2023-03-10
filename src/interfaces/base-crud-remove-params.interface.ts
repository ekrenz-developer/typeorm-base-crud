import { BaseCrudBaseParamsInterface } from './base-crud-base-params.interface';

export interface BaseCrudRemoveParamsInterface<TEntity>
  extends BaseCrudBaseParamsInterface<TEntity> {
  entity: TEntity;
}
