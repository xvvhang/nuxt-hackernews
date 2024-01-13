<template>
  <div>
    <div class="flex items-center gap-x-2 text-xs text-gray-500">
      <a :href="`/user/${comment.by}`">{{ comment.by }}</a>
      <span>{{ fromNow(comment.time) }}</span>
    </div>
    <div v-html="comment.text" class="text-sm"></div>
    <ul class="border-l border-orange-200 pl-8 hover:border-orange-500">
      <li v-for="kid in comment.kids" :key="kid" class="my-4">
        <Comment :item="kid"></Comment>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { fromNow } from '~~/utils/date.ts'

const props = defineProps({ item: String | Number })

const { data: comment } = await useFetch(`/api/item/${props.item}`)
</script>
