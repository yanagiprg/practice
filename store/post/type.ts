import { Post } from '@/types/models'

export interface S {
  posts: Post[]
}

export interface G {
  getPostList: Post[]
}

export interface RG {
  'post/getPostList': G['getPostList']
}

export interface M {
  setPostList: Post[]
}

export interface RM {
  'post/setPostList': M['setPostList']
}

export interface A {
  fetchPostList: null
  addPost: Post
  deletePost: string
  editPost: string
  updatePost: Post
}

export interface RA {
  'post/fetchPostList': A['fetchPostList']
  'post/addPost': A['addPost']
  'post/deletePost': A['deletePost']
  'post/editPost': A['editPost']
  'post/updatePost': A['updatePost']
}
