import http from '@/libs/http'

export async function getList(page: number, perPage: number) {
  const { data } = await http.get('/list', { params: { page, perPage } })
  return data
}

export async function createItem(name: string, desc: string) {
  const { data } = await http.post('/create', { name, desc }, { params: { redirect: '/list' } })
  return data
}

export async function deleteItem(itemId: string) {
  const { data } = await http.delete(`/item/${itemId}`)
  return data
}
