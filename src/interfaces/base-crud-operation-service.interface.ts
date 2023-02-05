import {
  BaseCrudOperationServiceFindAllParamsInterface,
  BaseCrudOperationServiceCreateParamsInterface,
  BaseCrudOperationServiceUpdateParamsInterface,
} from '@/interfaces';
import {
  BaseCrudOperationServiceFindOneParamsType,
  BaseCrudOperationServiceDeleteParamsType,
} from '@/types';

export interface BaseCrudOperationServiceInterface<TBody, TResponse> {
  create: (
    params: BaseCrudOperationServiceCreateParamsInterface<TBody>
  ) => Promise<TResponse>;
  findAll: (
    params: BaseCrudOperationServiceFindAllParamsInterface
  ) => Promise<TResponse>;
  findOne: (
    params: BaseCrudOperationServiceFindOneParamsType
  ) => Promise<TResponse>;
  update: (
    payload: BaseCrudOperationServiceUpdateParamsInterface<Partial<TBody>>
  ) => Promise<TResponse>;
  delete: (
    params: BaseCrudOperationServiceDeleteParamsType
  ) => Promise<TResponse>;
}
