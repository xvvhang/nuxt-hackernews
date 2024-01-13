<template>
  <nav class="bg-orange-500 px-2 py-1 flex items-center text-sm">
    <ul class="flex items-center gap-x-2">
      <li><a href="/" class="font-bold">Hacker News</a></li>
      <li v-for="item in NavItems" :key="item.name" :class="{ 'text-white': active === item.name }" class="hover:text-white">
        <a :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const NavItems = [
  { link: '/new', name: 'new' },
  { link: '/top', name: 'top' },
  { link: '/best', name: 'best' },
  { link: '/ask', name: 'ask' },
  { link: '/show', name: 'show' },
  { link: '/job', name: 'job' },
]

const route = useRoute()
const active = route.params.list
</script>
