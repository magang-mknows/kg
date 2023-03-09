export type MetaTypes = {
  page?: number;
  page_size?: number;
  search?: string;
  role_id?: number;
};

export interface CommonResponseInterface<T> {
  meta: MetaTypes;
  items: Array<T>;
}
