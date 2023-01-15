// import { Repository, DeepPartial, FindOptionsOrder } from 'typeorm';
// import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

// import { BaseCrudInterface } from '../interfaces/base-crud.interface';
// import { BaseCrudCreateParamsInterface } from '../interfaces/base-crud-create-params.interface';
// import { BaseCrudFindOneParamsInterface } from '../interfaces/base-crud-find-one-params.interface';
// import { BaseCrudFindAllParamsInterface } from '../interfaces/base-crud-find-all-params.interface';
// import { BaseCrudUpdateParamsInterface } from '../interfaces/base-crud-update-params.interface';
// import { BaseCrudRemoveParamsInterface } from '../interfaces/base-crud-remove-params.interface';
// import { BaseCrudRestoreParamsInterface } from '../interfaces/base-crud-restore-params.interface';
// import { BaseCrudFindOneResponseType } from '../types/base-crud-find-one-response.type';
// import { LoggerService } from '@/logger/services/logger.service';
// import { AbstractEntity } from '../entities/abstract.entity';
// import { PaginationResponseDto } from '../dtos/pagination-response.dto';
// import { PaginationMetaDto } from '../dtos/pagination-meta.dto';
// import { Order } from '../consts/order.const';

// export class BaseCrudService<Entity, EntityBodyDto>
//   implements BaseCrudInterface<Entity, EntityBodyDto>
// {
//   constructor(
//     private entityRepository: Repository<Entity>,
//     private logger: LoggerService,
//   ) {}

//   async create({
//     payload,
//   }: BaseCrudCreateParamsInterface<EntityBodyDto>): Promise<Entity> {
//     try {
//       this.logger.log(`${BaseCrudService.name}.create}`);
//       this.entityRepository.save
//       const newEntity: Entity = await this.entityRepository.save(
//         payload as DeepPartial<Entity>,
//       );
//       return newEntity;
//     } catch (e) {
//       this.logger.error(
//         `${BaseCrudService.name}.create error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   async findOne({
//     id,
//     relations,
//     where,
//     withDeleted,
//   }: BaseCrudFindOneParamsInterface<Entity>): Promise<
//     BaseCrudFindOneResponseType<Entity>
//   > {
//     try {
//       this.logger.log(`${BaseCrudService.name}.findOne`);
//       const foundEntity = await this.entityRepository.findOne({
//         where: { id, ...where },
//         relations,
//         withDeleted,
//       });
//       return foundEntity;
//     } catch (e) {
//       this.logger.error(
//         `${BaseCrudService.name}.findOne error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   async findAll({
//     paginationOptions = {
//       order: Order.ASC,
//       page: 1,
//       take: 10,
//       skip: 0,
//     },
//     relations,
//     where,
//   }: BaseCrudFindAllParamsInterface<Entity>): Promise<
//     PaginationResponseDto<Entity>
//   > {
//     try {
//       this.logger.log(`${BaseCrudService.name}.findAll}`);
//       const { order, skip, take } = paginationOptions;
//       const [entities, itemCount] = await this.entityRepository.findAndCount({
//         relations,
//         where,
//         skip,
//         take,
//         order: { createdAt: order } as FindOptionsOrder<Entity>,
//       });

//       const paginationMeta = new PaginationMetaDto({
//         paginationOptions,
//         itemCount,
//       });
//       const paginationResponse = new PaginationResponseDto(
//         entities,
//         paginationMeta,
//       );

//       return paginationResponse;
//     } catch (e) {
//       this.logger.error(
//         `${BaseCrudService.name}.findAll error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   async update({
//     id,
//     payload,
//     relations,
//     where,
//   }: BaseCrudUpdateParamsInterface<Entity, EntityBodyDto>): Promise<
//     BaseCrudFindOneResponseType<Entity>
//   > {
//     try {
//       this.logger.log(`${BaseCrudService.name}.update}`);
//       await this.entityRepository.update(
//         {
//           id,
//           ...where,
//         },
//         payload as unknown as QueryDeepPartialEntity<Entity>,
//       );
//       const updatedEntity = await this.findOne({ id, relations });

//       return updatedEntity;
//     } catch (e) {
//       this.logger.error(
//         `${BaseCrudService.name}.update error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   async remove({
//     id,
//     relations,
//     where,
//   }: BaseCrudRemoveParamsInterface<Entity>): Promise<
//     BaseCrudFindOneResponseType<Entity>
//   > {
//     try {
//       this.logger.log(`${BaseCrudService.name}.remove}`);
//       let entityId: number;

//       if (typeof id === 'number') {
//         // softDelete
//         await this.entityRepository.softDelete({
//           id,
//           ...where,
//         });
//         entityId = id;
//       } else {
//         // softRemove
//         await this.entityRepository.softRemove(id);
//         entityId = id.id;
//       }

//       const deletedEntity = await this.findOne({
//         id: entityId,
//         relations,
//         withDeleted: true,
//       });
//       return deletedEntity;
//     } catch (e) {
//       this.logger.error(
//         `${BaseCrudService.name}.remove error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }

//   async restore({
//     id,
//     relations,
//   }: BaseCrudRestoreParamsInterface<Entity>): Promise<
//     BaseCrudFindOneResponseType<Entity>
//   > {
//     try {
//       this.logger.log(`${BaseCrudService.name}.restore}`);
//       await this.entityRepository.restore(id);
//       const restoreEntity = await this.findOne({ id, relations });
//       return restoreEntity;
//     } catch (e) {
//       this.logger.error(
//         `${BaseCrudService.name}.restore error: ${JSON.stringify(e)}`,
//       );
//       throw e;
//     }
//   }
// }
