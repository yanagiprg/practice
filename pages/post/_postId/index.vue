<template>
  <div class="">
    <EditPost :prop-id="id" :prop-title="title" :prop-content="content" />
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    const postData = await store.dispatch('post/editPost', params.postId)
    return {
      id: postData.id,
      title: postData.title,
      content: postData.content,
    }
  },
}
</script>
