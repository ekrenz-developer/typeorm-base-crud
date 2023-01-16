// import { Order } from '@/consts/order.const';
import { FindOptionsOrderValue } from 'typeorm';

export interface PaginationOptionsInterface {
  order?: FindOptionsOrderValue;
  page?: number;
  take?: number;
  skip: number;
}
