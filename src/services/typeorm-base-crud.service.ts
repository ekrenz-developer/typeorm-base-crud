import { Repository, FindOptionsOrder } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import {
  BaseCrudInterface,
  LoggerServiceInterface,
  BaseCrudCreateParamsInterface,
  BaseCrudFindOneParamsInterface,
  BaseCrudFindAllParamsInterface,
  BaseCrudUpdateParamsInterface,
  BaseCrudRemoveParamsInterface,
  BaseCrudDeleteParamsInterface,
  BaseCrudRestoreParamsInterface,
  PaginationResponseInterface,
  BaseEntityInterface,
} from '@/interfaces';
import { BaseCrudFindOneResponseType } from '@/types';
import { PaginationMetaDto, PaginationResponseDto } from '@/dtos';

export class BaseCrudService<TEntity extends BaseEntityInterface>
  implements BaseCrudInterface<TEntity>
{
  private className = BaseCrudService.name;

  constructor(
    private entityRepository: Repository<TEntity>,
    private logger: LoggerServiceInterface
  ) {}

  async create({
    payload,
  }: BaseCrudCreateParamsInterface<TEntity>): Promise<TEntity> {
    try {
      this.logger.log(`${BaseCrudService.name}.create}`);
      this.entityRepository.save;
      const newEntity: TEntity = await this.entityRepository.save(payload);
      return newEntity;
    } catch (e) {
      this.logger.error(`${this.className}.create error: ${JSON.stringify(e)}`);
      throw e;
    }
  }

  async findOne({
    id,
    relations,
    where,
    withDeleted,
  }: BaseCrudFindOneParamsInterface<TEntity>): Promise<
    BaseCrudFindOneResponseType<TEntity>
  > {
    try {
      this.logger.log(`${this.className}.findOne`);
      const foundEntity = await this.entityRepository.findOne({
        where: { id, ...where },
        relations,
        withDeleted,
      });
      return foundEntity;
    } catch (e) {
      this.logger.error(
        `${this.className}.findOne error: ${JSON.stringify(e)}`
      );
      throw e;
    }
  }

  async findAll({
    paginationOptions = {
      order: 'ASC',
      page: 1,
      take: 10,
      skip: 0,
    },
    relations,
    where,
  }: BaseCrudFindAllParamsInterface<TEntity>): Promise<
    PaginationResponseInterface<TEntity>
  > {
    try {
      this.logger.log(`${this.className}.findAll}`);
      const { order, skip, take } = paginationOptions;
      const [data, itemCount] = await this.entityRepository.findAndCount({
        relations,
        where,
        skip,
        take,
        order: { createdAt: order } as unknown as FindOptionsOrder<TEntity>,
      });

      const meta = new PaginationMetaDto({
        paginationOptions,
        itemCount,
      });
      const response = new PaginationResponseDto<TEntity>({
        data,
        meta,
      });

      return response;
    } catch (e) {
      this.logger.error(
        `${this.className}.findAll error: ${JSON.stringify(e)}`
      );
      throw e;
    }
  }

  async update({
    id,
    payload,
    relations,
    where,
  }: BaseCrudUpdateParamsInterface<TEntity>): Promise<
    BaseCrudFindOneResponseType<TEntity>
  > {
    try {
      this.logger.log(`${this.className}.update}`);
      let response: BaseCrudFindOneResponseType<TEntity>;
      const { affected } = await this.entityRepository.update(
        {
          id,
          ...where,
        },
        payload as unknown as QueryDeepPartialEntity<TEntity>
      );
      if (affected && affected > 0) {
        response = await this.findOne({ id, relations });
      }
      return response;
    } catch (e) {
      this.logger.error(`${this.className}.update error: ${JSON.stringify(e)}`);
      throw e;
    }
  }

  async delete({
    id,
    where,
  }: BaseCrudDeleteParamsInterface<TEntity>): Promise<boolean> {
    try {
      this.logger.log(`${this.className}.delete}`);
      const deletedEntity = await this.entityRepository.delete({
        id,
        ...where,
      });
      const response = deletedEntity.affected > 0;
      return response;
    } catch (e) {
      this.logger.error(`${this.className}.delete error: ${JSON.stringify(e)}`);
      throw e;
    }
  }

  async softDelete({
    id,
    relations,
    where,
  }: BaseCrudDeleteParamsInterface<TEntity>): Promise<
    BaseCrudFindOneResponseType<TEntity>
  > {
    try {
      this.logger.log(`${this.className}.softDelete}`);
      let response: BaseCrudFindOneResponseType<TEntity>;
      const { affected } = await this.entityRepository.softDelete({
        id,
        ...where,
      });
      if (affected && affected > 0) {
        this.logger.log(`${this.className}.softDelete affected: ${affected}}`);
        response = await this.findOne({
          id,
          relations,
          withDeleted: true,
        });
      }
      return response;
    } catch (e) {
      this.logger.error(
        `${this.className}.softDelete error: ${JSON.stringify(e)}`
      );
      throw e;
    }
  }

  async remove({
    entity,
    relations,
  }: BaseCrudRemoveParamsInterface<TEntity>): Promise<
    BaseCrudFindOneResponseType<TEntity>
  > {
    try {
      this.logger.log(`${this.className}.remove}`);
      const { id } = await this.entityRepository.remove(entity);
      const foundEntity = await this.findOne({
        id,
        relations,
        withDeleted: true,
      });
      return foundEntity;
    } catch (e) {
      this.logger.error(`${this.className}.remove error: ${JSON.stringify(e)}`);
      throw e;
    }
  }

  async softRemove({
    entity,
    relations,
  }: BaseCrudRemoveParamsInterface<TEntity>): Promise<
    BaseCrudFindOneResponseType<TEntity>
  > {
    try {
      this.logger.log(`${this.className}.softRemove}`);
      const { id } = await this.entityRepository.softRemove(entity);
      const foundEntity = await this.findOne({
        id,
        relations,
        withDeleted: true,
      });
      return foundEntity;
    } catch (e) {
      this.logger.error(
        `${this.className}.softRemove error: ${JSON.stringify(e)}`
      );
      throw e;
    }
  }

  async restore({
    id,
    relations,
  }: BaseCrudRestoreParamsInterface<TEntity>): Promise<
    BaseCrudFindOneResponseType<TEntity>
  > {
    try {
      this.logger.log(`${this.className}.restore}`);
      let response: BaseCrudFindOneResponseType<TEntity>;
      const { affected } = await this.entityRepository.restore(id);
      if (affected && affected > 0) {
        response = await this.findOne({ id, relations });
      }
      return response;
    } catch (e) {
      this.logger.error(
        `${this.className}.restore error: ${JSON.stringify(e)}`
      );
      throw e;
    }
  }
}
