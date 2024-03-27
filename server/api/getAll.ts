import data from '~/db/websitedata.json'
export default defineEventHandler(async () => data.result.data)
