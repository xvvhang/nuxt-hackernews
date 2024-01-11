<template>
  <div class="container mx-auto max-w-screen-md">
    <a href="https://www.ycombinator.com/" target="_blank" class="flex align-center">
      <span class="w-24 h-24 bg-orange-500 text-center text-5xl leading-loose text-white">Y</span>
      <span class="px-4 text-5xl leading-loose font-medium text-orange-500">Combinator</span>
    </a>
    <slot />
    <p class="border-t-4 border-t-orange-500"></p>
  </div>
</template>
