<template>
  <footer class="border-t-4 border-t-orange-500 py-2 flex flex-col items-center text-sm text-gray-500">
    <ul class="flex justify-center gap-x-2">
      <li v-for="item in NavItems" :key="item.name" class="hover:text-black">
        <a :href="item.link" :target="item.blank ? '_blank' : ''">{{ item.name }}</a>
      </li>
    </ul>
    <p class="mt-2">
      <span class="mr-2">Search:</span>
      <input type="text" class="border-2 border-orange-500 rounded" />
    </p>
  </footer>
</template>

<script setup>
const NavItems = [
  { link: '/newsguidelines', name: 'Guidelines' },
  { link: '/newsfaq', name: 'FAQ' },
  { link: '/lists', name: 'Lists' },
  { link: 'https://github.com/HackerNews/API', name: 'API', blank: true },
  { link: '/security', name: 'Security' },
  { link: 'https://www.ycombinator.com/legal/', name: 'Legal', blank: true },
  { link: 'https://www.ycombinator.com/apply/', name: 'Apply to YC', blank: true },
  { link: 'mailto:hn@ycombinator.com', name: 'Contact' },
]
</script>
