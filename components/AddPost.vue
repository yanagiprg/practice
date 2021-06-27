<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title
        </label>
        <input
          id="title"
          v-model="state.title"
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
          placeholder="title"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
          Content
        </label>
        <input
          id="content"
          v-model="state.content"
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
          placeholder="content"
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
          :disabled="state.hasError"
          @click="addPost"
        >
          Submit
        </button>
        <p v-if="state.hasError" class="error">error</p>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from '@vue/composition-api'

interface State {
  title: string
  content: string
  hasError: boolean
}

export default defineComponent({
  emits: ['submit'],

  setup(_, context) {
    const state = reactive<State>({
      title: '',
      content: '',
      hasError: false,
    })

    const addPost = () => {
      if (state.title && state.content) {
        context.emit('submit', state.title, state.content)
        state.title = ''
        state.content = ''
      } else {
        state.hasError = true
        console.log('error')
      }
    }

    watchEffect(() => {
      if (state.title.length > 10) {
        state.hasError = true
      } else {
        state.hasError = false
      }
    })

    return {
      state,
      addPost,
    }
  },
})
</script>
<style scoped>
.error {
  color: red;
}
</style>
