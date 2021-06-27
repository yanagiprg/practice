<template>
  <div class="p-10">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="@/assets/img/the_xprmnt.png" alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ post.title }}</div>
        <p class="text-gray-700 text-base">
          {{ post.content }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          >{{ date }}</span
        >
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
          @click="remove"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { PostType } from '@/types/models'

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<PostType>,
      required: true,
    },
    
  },
  emits: ['remove'],
  setup(props, context) {
    const date = computed(() => {
      if (!props.post) return
      const { createdAt } = props.post
      return `${createdAt.getFullYear()}/${
        createdAt.getMonth() + 1
      }/${createdAt.getDate()}`
    })
    const remove = () => {
      context.emit('remove', props.post!.id)
    }
    return {
      date,
      remove,
    }
  },
})
</script>
