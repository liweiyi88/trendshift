export interface PageProps<T> {
  searchParams: { [key: string]: string | string[] | undefined }
  params: T
}
