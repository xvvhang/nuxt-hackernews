<template>
  <Suspense>
    <ol class="mx-2">
      <li v-for="(item, idx) in data" :key="item.id" class="my-1 flex items-start">
        <div class="mr-2 leading-6 text-sm text-gray-500">{{ padStart(idx + 1) }}.</div>
        <div>
          <div class="flex items-center gap-x-1">
            <a :href="hrefLink(item)" class="leading-6 text-sm hover:underline hover:text-orange-500 cursor-pointer">{{ item.title }}</a>
            <span v-if="item.url" class="text-xs text-gray-500">(<a :href="item.url" class="hover:underline">{{ shortenURL(item.url) }}</a>)</span>
          </div>
          <div class="flex gap-x-2 items-center text-xs text-gray-500">
            <span>{{ item.score > 1 ? `${item.score} points` : `${item.score} point` }}</span>
            <span>by <a :href="`/user/${item.by}`" class="hover:underline">{{ item.by }}</a></span>
            <span>{{ fromNow(item.time) }}</span>
            <span v-if="item.kids"><a :href="`/item/${item.id}`" class="hover:underline">{{ item.kids?.length > 1 ? `${item.kids?.length} comments` : `${item.kids?.length} comment` }}</a></span>
          </div>
        </div>
      </li>
    </ol>
  </Suspense>
</template>

<script setup lang="ts">
import shortenURL from '~~/utils/url.ts'
import { fromNow } from '~~/utils/date.ts'

const route = useRoute()
const { data } = await useFetch(`/api/list/${route.params.list}`)

const padStart = (str) => String(str).padStart(2, '0')
const hrefLink = (item) => item.url || `/item/${item.id}`
</script>
