
export default interface Pageable<A extends Array<T>, T> {
  pageNumber: number
  pageSize: number
  hasNext: boolean
  totalCount: number
  data: A
}
