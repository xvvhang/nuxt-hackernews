import { get, child } from 'firebase/database'
import { getItemData } from '../item/[id]';

const Types = ['new', 'top', 'best', 'ask', 'show', 'job']

const getListData = async (type: string) => {
  if (!Types.includes(type)) return;
  try {
    const snapshot = await get(child(hndb, `v0/${type}stories`))
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
  try {
    const type = getRouterParam(event, 'type')
    if (!type) return
    const data = await getListData(type)
    return data
  } catch (error) {
    console.error(error)
  }
})
