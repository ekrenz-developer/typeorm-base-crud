export abstract class BaseCrudOperationService<TResponse> {
  abstract create(
    ...params: any[]
  ): // params: BaseCrudOperationServiceCreateParamsInterface<TBody>
  Promise<TResponse>;
  abstract findAll(
    ...params: any[]
  ): // params: BaseCrudOperationServiceFindAllParamsInterface
  Promise<TResponse>;
  abstract findOne(
    ...params: any[]
  ): // params: BaseCrudOperationServiceFindOneParamsType
  Promise<TResponse>;
  abstract update(
    ...params: any[]
  ): // params: BaseCrudOperationServiceUpdateParamsInterface<TBody>
  Promise<TResponse>;
  abstract delete(
    ...params: any[]
  ): // params: BaseCrudOperationServiceDeleteParamsType
  Promise<TResponse>;
}
