<template>
  <div class="bg-indigo-700">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Title
          </label>
          <input
            id="username"
            v-model="title"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none
              focus:shadow-outline
            "
            type="text"
            placeholder="Title"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Content
          </label>
          <input
            id="password"
            v-model="content"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none
              focus:shadow-outline
            "
            type="text"
            placeholder="Content"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none
              focus:shadow-outline
            "
            type="button"
            @click="addPost({ title, content })"
          >
            Post
          </button>
          <button
            class="
              bg-red-500
              hover:bg-red-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none
              focus:shadow-outline
            "
            type="button"
            @click="resetForm"
          >
            Reset
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '@/types/models'

export default Vue.extend({
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    async addPost(payload: Post) {
      await this.$store.dispatch('post/addPost', payload)
      await this.$store.dispatch('post/fetchPostList')
      this.resetForm()
      this.$router.push('/post/')
    },
    resetForm() {
      this.title = ''
      this.content = ''
    },
  },
})
</script>
