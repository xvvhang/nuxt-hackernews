<template>
  <Suspense>
    <div class="mx-2 my-1">
      <section>
        <div class="flex items-center gap-x-2">
          <a :href="hrefLink(data)" class="leading-6 text-sm hover:underline hover:text-orange-500 cursor-pointer">{{ data.title }}</a>
          <span v-if="data.url" class="text-xs text-gray-500">(<a :href="data.url" class="hover:underline">{{ shortenURL(data.url) }}</a>)</span>
        </div>
        <div class="flex gap-x-2 items-center text-xs text-gray-500">
          <span>{{ data.score > 1 ? `${data.score} points` : `${data.score} point` }}</span>
          <span>by <a :href="`/user/${data.by}`" class="hover:underline">{{ data.by }}</a></span>
          <span>{{ fromNow(data.time) }}</span>
          <span v-if="data.kids"><a :href="`/item/${data.id}`" class="hover:underline">{{ data.kids?.length > 1 ? `${data.kids?.length} comments` : `${data.kids?.length} comment` }}</a></span>
        </div>
      </section>
      <ul class="pl-8">
        <li v-for="kid in data.kids" :key="kid" class="my-4">
          <Comment :item="kid"></Comment>
        </li>
      </ul>
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import shortenURL from '~~/utils/url.ts'
import { fromNow } from '~~/utils/date.ts'

const route = useRoute()
const { data } = await useFetch(`/api/item/${route.params.id}`)

const hrefLink = (data) => data.url || `/item/${data.id}`
</script>
