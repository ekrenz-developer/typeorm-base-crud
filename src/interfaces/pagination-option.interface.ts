import { Order } from '@/consts/order.const';

export interface PaginationOptionInterface {
  order?: Order;
  page?: number;
  take?: number;
  skip: number;
}
