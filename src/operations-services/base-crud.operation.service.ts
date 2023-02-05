import { BaseEntityInterface, LoggerServiceInterface } from '@/interfaces';

export abstract class BaseCrudOperationService<
  TEntity extends BaseEntityInterface,
  TBody,
  TResponse
> {
  private name = BaseCrudOperationService.name;

  constructor(protected logger: LoggerServiceInterface) {}

  abstract create(payload: TBody): Promise<TResponse>;
  abstract create(payload: TBody): Promise<TResponse>;
  abstract create(payload: TBody): Promise<TResponse>;
  abstract create(payload: TBody): Promise<TResponse>;
}
