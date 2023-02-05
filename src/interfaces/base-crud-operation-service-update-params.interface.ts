import { BaseCrudOperationServiceBaseParamsInterface } from './base-crud-operation-service-base-params.interface';

export interface BaseCrudOperationServiceUpdateParamsInterface<TBody>
  extends BaseCrudOperationServiceBaseParamsInterface {
  payload: TBody;
}
