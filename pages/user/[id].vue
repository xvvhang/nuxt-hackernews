<template>
  <Suspense>
    <table class="m-2 border-separate border-spacing-x-2 borer-spacing-y-1">
      <tr>
        <td class="align-top leading-5 text-xs text-gray-500">user:</td>
        <td class="text-sm">{{ data.id }}</td>
      </tr>
      <tr>
        <td class="align-top leading-5 text-xs text-gray-500">created:</td>
        <td class="text-sm">{{ format(data.created) }}</td>
      </tr>
      <tr>
        <td class="align-top leading-5 text-xs text-gray-500">karma:</td>
        <td class="text-sm">{{ data.karma }}</td>
      </tr>
      <tr>
        <td class="align-top leading-5 text-xs text-gray-500">about:</td>
        <td class="text-sm">
          <p v-html="data.about"></p>
        </td>
      </tr>
    </table>
  </Suspense>
</template>

<script setup>
import { format } from '~~/utils/date.ts'

const route = useRoute()
const { data } = await useFetch(`/api/user/${route.params.id}`)
</script>
