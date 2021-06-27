export interface PostType {
  title: string
  content?: string
  createdAt: Date
  id?: string
}

export default interface PostListType {
  title: string
  id?: any
  createdAt: Date
}
