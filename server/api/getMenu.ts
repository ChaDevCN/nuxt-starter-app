import type { Data, Menu } from '~/types/data'

export default defineEventHandler(async () => {
  const data = (await $fetch('/api/getAll')) as Data
  function buildHeaderMenu (menuData: Menu) {
    ['products', 'knowledge', 'news'].forEach((type) => {
      clearDetails(menuData.find(item => item.type === type))
    })
    return menuData
  }

  function clearDetails (node: any) {
    if (!node) { return node }
    node.children = node.children.filter(
      (item: any) => !item.type.endsWith('detail')
    )
    node.children.forEach((child: any) => clearDetails(child))
  }

  const headerMenu = buildHeaderMenu(data.menu) || []
  return { headerMenu }
})
