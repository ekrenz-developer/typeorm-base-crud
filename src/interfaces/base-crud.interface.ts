// import { PaginationResponseDto } from '../dtos/pagination-response.dto';
import { BaseCrudCreateParamsInterface } from './base-crud-create-params.interface';
import { BaseCrudFindOneParamsInterface } from './base-crud-find-one-params.interface';
import { BaseCrudFindAllParamsInterface } from './base-crud-find-all-params.interface';
import { BaseCrudUpdateParamsInterface } from './base-crud-update-params.interface';
import { BaseCrudRemoveParamsInterface } from './base-crud-remove-params.interface';
import { BaseCrudRestoreParamsInterface } from './base-crud-restore-params.interface';
import { BaseCrudFindOneResponseType } from '@/types';

export interface BaseCrudInterface<TEntity> {
  create: (params: BaseCrudCreateParamsInterface<TEntity>) => Promise<TEntity>;
  findOne: (
    params: BaseCrudFindOneParamsInterface<TEntity>
  ) => Promise<BaseCrudFindOneResponseType<TEntity>>;
  // findAll: (
  //   params: BaseCrudFindAllParamsInterface<TEntity>
  // ) => Promise<PaginationResponseDto<TEntity>>;
  update: (
    params: BaseCrudUpdateParamsInterface<TEntity>
  ) => Promise<BaseCrudFindOneResponseType<TEntity>>;
  remove: (
    params: BaseCrudRemoveParamsInterface<TEntity>
  ) => Promise<BaseCrudFindOneResponseType<TEntity>>;
  restore: (
    params: BaseCrudRestoreParamsInterface<TEntity>
  ) => Promise<BaseCrudFindOneResponseType<TEntity>>;
}
