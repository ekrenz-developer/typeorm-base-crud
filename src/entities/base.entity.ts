import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
// import { AutoMap } from '@automapper/classes';

import { BaseEntityInterface } from '@/interfaces/base-entity.interface';

export class BaseEntity implements BaseEntityInterface {
  // @AutoMap()
  @PrimaryGeneratedColumn()
  id?: number;

  // @AutoMap()
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  // @AutoMap()
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  // @AutoMap()
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
