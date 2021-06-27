<template>
  <div class="container mx-auto">
    <add-post @submit="addPost" />
    <post
      v-for="post in sortPostList"
      :key="post.id"
      :post="post"
      @remove="removePost"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'
import { PostType } from '@/types/models'
import AddPost from '@/components/AddPost.vue'
import { v4 as uuid } from 'uuid'
import Post from '@/components/Post.vue'

interface State {
  postList: PostType[]
}

export default defineComponent({
  components: {
    AddPost,
    Post,
  },

  setup() {
    const state = reactive<State>({
      postList: [],
    })

    const sortPostList = computed(() =>
      state.postList.sort((a, b) => {
        return b.createdAt.getTime() - a.createdAt.getTime()
      })
    )

    const addPost = (title: string, content: string) => {
      state.postList = [
        ...state.postList,
        {
          id: uuid(),
          title,
          content,
          createdAt: new Date(),
        },
      ]
    }

    const removePost = (id: string) => {
      state.postList = state.postList.filter((post) => post.id !== id)
    }

    return {
      sortPostList,
      addPost,
      removePost,
    }
  },
})
</script>
