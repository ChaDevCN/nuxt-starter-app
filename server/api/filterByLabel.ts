const filterItemsByLabel = (items: any[], label: string) => {
  return items.filter(
    (item: any) => item.labels && item.labels.includes(label)
  )
}

export default defineEventHandler(async () => {
  const { products, knowledge, news } = await $fetch('/api/getAll')
  const labelToFilter = 'hot'

  return {
    hotProducts: filterItemsByLabel(products, labelToFilter),
    hotKnowledge: filterItemsByLabel(knowledge, labelToFilter),
    hotNews: filterItemsByLabel(news, labelToFilter)
  }
})
