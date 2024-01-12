import { get, child } from 'firebase/database'

export const getItemData = async (id: string) => {
  try {
    const snapshot = await get(child(hndb, `v0/item/${id}`))
    if (snapshot.exists()) return snapshot.val()
    console.log(`v0/item/${id}`, 'no data')
  } catch (error) {
    console.error(`v0/item/${id}`, error)
  }
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) return
  const data = await getItemData(id)
  return data
})
