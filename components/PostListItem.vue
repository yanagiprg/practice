<template>
  <div class="p-10">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="@/assets/img/the_xprmnt.png" alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2"><slot /></div>
        <p class="text-gray-700 text-base"><slot /></p>
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
          >{{ post.title }}</span
        >
        {{ post.content }}
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
          @click="deletePost(post)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true },
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    async deletePost(post) {
      await this.$store.dispatch('post/deletePost', post.id)
      await this.$store.dispatch('post/getPosts')
    },
  },
}
// <script lang="ts">
// import { Component, Vue, Prop } from 'nuxt-property-decorator'
// import { Post } from '@/types/models'
// import { cloneDeep } from 'lodash'

// @Component
// export default class PostListItem extends Vue {
//   @Prop({ default: () => {}, type: Object }) readonly: any
//   propPost!: Post
//   post: Post = {
//     title: '',
//     content: '',
//     id: '',
//   }

//   created() {
//     this.post = cloneDeep(this.propPost)
//   }
// }
// <script>
</script>
