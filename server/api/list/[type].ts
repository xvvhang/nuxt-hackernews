import { get, child } from 'firebase/database'
import { getItemData } from '../item/[id]';

const getListData = async (list: string) => {
  try {
    const snapshot = await get(child(hndb, `v0/${list}stories`))
    if (!snapshot.exists()) console.log('No data avaible')
    const items = snapshot.val()
    const data = await Promise.all(items.map(async (id: string) => {
      return await getItemData(id)
    }))
    return data
  } catch (error) {
    console.error(error)
  }
}

export default defineEventHandler(async (event) => {
  const list = getRouterParam(event, 'type')
  if (!list) return
  const data = await getListData(list)
  return data
})
