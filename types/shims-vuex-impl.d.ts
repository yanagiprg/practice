import 'vuex'

import * as Post from '@/store/post/type'

type RootState = {
  posts: Post.S
}
type RootGetters = Post.RG
type RootMutations = Post.RM
type RootActions = Post.RA
