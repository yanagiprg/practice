import { Post } from '@/types/models'

export interface S {
  postList: Post[]
}

export interface G {
  getPostList: Post[]
}

export interface M {
  setPostList: Post[]
}

export interface A {
  fetchPostList: string
}
