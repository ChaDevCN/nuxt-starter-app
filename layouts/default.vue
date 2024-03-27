<template>
  <div>
    <Header />
    <slot />
  </div>
</template>
<script setup lang="ts">
const init = async () => {
  const data = await $fetch('/api/getMenu')
}
init()
</script>
