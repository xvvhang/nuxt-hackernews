<template>
  <nav class="bg-orange-500 px-2 py-1 flex justify-between items-center text-sm">
    <ul class="flex items-center gap-x-2">
      <li><a href="/" class="font-bold">Hacker News</a></li>
      <li v-for="item in NavItems" :key="item.name" class="hover:text-white">
        <a :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
    <ul class="flex items-center gap-x-2">
      <li class="hover:text-white"><a href="/user">USER</a></li>
      <li v-if="!isLogin" class="hover:text-white"><a href="/login">login</a></li>
      <li v-if="isLogin" class="hover:text-white"><a href="/logout">logout</a></li>
    </ul>
  </nav>
</template>

<script setup>
const NavItems = [
  { link: '/new', name: 'new' },
  { link: '/top', name: 'top' },
  { link: '/best', name: 'best' },
  { link: '/ask', name: 'ask' },
  { link: '/show', name: 'show' },
  { link: '/job', name: 'jobs' },
]

const isLogin = false
</script>

<style></style>
