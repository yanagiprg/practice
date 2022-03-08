<template>
  <div class="">
    <PostListItem
      v-for="post in $store.getters['post/posts']"
      :key="post.id"
      :post="post"
      @edit="$emit('edit-post')"
      @delete="$emit('delete-post')"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('post/getPosts')
  },
}
</script>
