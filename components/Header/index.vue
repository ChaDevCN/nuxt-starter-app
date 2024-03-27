<template>
  <header class="w-[100%]">
    <HeaderComponentHeader :data="data" />
    <HeaderComponentNav :data="menus?.headerMenu" />
  </header>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/getInfo')
const { data: menus } = useFetch('/api/getMenu')
</script>
<template></template>
