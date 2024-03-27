export default defineEventHandler(async () => {
  const { site_pic_pcbanner, site_pic } = await $fetch('/api/getAll')

  const pcbanner1 = site_pic_pcbanner
    .filter(item => item.glid === site_pic[0].ID)
    .sort((a, b) => a.sort - b.sort)

  const pcbanner2 = pcbanner1.map((item: any) => {
    const obj = { url: item.url } as any
    if (item.type) { obj.type = item.type }
    return obj
  })

  return pcbanner2
})
