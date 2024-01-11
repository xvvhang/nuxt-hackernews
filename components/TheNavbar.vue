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
  { link: '/newest', name: 'new' },
  { link: '/front', name: 'past' },
  { link: '/newcomments', name: 'comments' },
  { link: '/ask', name: 'ask' },
  { link: '/show', name: 'show' },
  { link: '/jobs', name: 'jobs' },
  { link: '/submit', name: 'submit' },
]

const isLogin = false
</script>

<style></style>
