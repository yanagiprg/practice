<template>
  <div class="w-full">
    <PostListItem
      v-for="post in $store.getters['post/getPostList']"
      :key="post.id"
      :post="post"
      @edit="$emit('edit-post')"
      @delete="$emit('delete-post')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$store.dispatch('post/fetchPostList')
  },
})
</script>
