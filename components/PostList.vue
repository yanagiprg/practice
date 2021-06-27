// postList.vue
<template>
  <div>
    <div>
      <span>{{ post.title }}</span>
    </div>
    <div>
      {{ date }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import Post from '@/types/models'

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  // emits: ['remove'],
  setup(props) {
    const date = computed(() => {
      if (!props.post) return
      const { createdAt } = props.post
      return `${createdAt.getFullYear()}/${
        createdAt.getMonth() + 1
      }/${createdAt.getDate()}`
    })

    // const toggle = () => {
    //   context.emit('toggle', props.post!.id)
    // }

    // const remove = () => {
    //   context.emit('remove', props.post!.id)
    // }

    return {
      date,
      // toggle,
      // remove,
    }
  },
})
</script>
