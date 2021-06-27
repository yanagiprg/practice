<template>
  <div class="container">
    <div>
      <post
        v-for="post in sortPostList"
        :key="post.id"
        :post="post"
        @remove="removePost"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'
import { PostType } from '@/types/models'
import Post from '@/components/Post.vue'

interface State {
  postList: PostType[]
}

export default defineComponent({
  components: {
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

    const removePost = (id: string) => {
      state.postList = state.postList.filter((post) => post.id !== id)
    }

    return {
      sortPostList,
      removePost,
    }
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
