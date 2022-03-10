<template>
  <div class="p-10 w-full flex justify-center">
    <div class="max-w-sm rounded overflow-hidden shadow-lg card-size">
      <img class="w-full" src="@/assets/img/sample.jpeg" alt="Mountain" />
      <div class="px-6 py-2">
        <div class="font-bold text-xl mb-2">{{ post.title }}</div>
        <p class="text-gray-700 text-base">{{ post.content }}</p>
      </div>
      <div class="px-6 pt-2 pb-2">
        <button
          class="
            inline-block
            bg-blue-400
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          @click="redirectPost(post.id)"
        >
          Edit
        </button>
        <button
          class="
            inline-block
            bg-red-400
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          @click="deletePost(post.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Post } from '@/types/models'
export default Vue.extend({
  props: {
    post: { type: Object, required: true } as PropOptions<Post>,
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  mounted() {
    this.$store.dispatch('post/fetchPostList')
  },
  methods: {
    redirectPost(id: string) {
      this.$router.push(`/post/${id}`)
    },
    async deletePost(id: string) {
      await this.$store.dispatch('post/deletePost', id)
      await this.$store.dispatch('post/fetchPostList')
    },
  },
})
</script>

<style scoped>
.card-size {
  width: 280px;
}
</style>
