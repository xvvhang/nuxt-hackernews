import { get, child } from 'firebase/database'

const getUserData = async (id: string) => {
  try {
    const snapshot = await get(child(hndb, `v0/user/${id}`))
    if (snapshot.exists()) return snapshot.val()
    console.log(`v0/user/${id}`, 'no data')
  } catch (error) {
    console.error(`v0/user/${id}`, error)
    return null
  }
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) return
  const data = await getUserData(id)
  return data
})
