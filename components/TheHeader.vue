<template>
  <div
    class="
      header-container
      flex
      justify-between
      items-center
      mx-0
      px-4
      py-2
      bg-white
      w-screen
      z-50
    "
  >
    <nuxt-link
      to="/post/"
      class="
        bg-transparent
        hover:bg-blue-500
        text-blue-700
        font-semibold
        hover:text-white
        py-2
        px-4
        border border-blue-500
        hover:border-transparent
        rounded
      "
    >
      Home
    </nuxt-link>
    <nuxt-link
      to="/post/new"
      class="
        bg-transparent
        hover:bg-red-500
        text-red-700
        font-semibold
        hover:text-white
        py-2
        px-4
        border border-red-500
        hover:border-transparent
        rounded
      "
    >
      New
    </nuxt-link>
  </div>
</template>

<style>
.header-container {
  height: 80px;
}
</style>
