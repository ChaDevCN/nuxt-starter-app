export default defineEventHandler(async () => {
  const { base_info } = await $fetch('/api/getAll')
  return {
    data: base_info[0] || {}
  }
})
