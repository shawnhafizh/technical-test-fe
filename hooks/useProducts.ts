import axios from 'axios'

export const fetchProducts = async (params: {
  page: number
  limit: number
  search?: string
}) => {
  const res = await axios.get('/api/products', { params })
  return res.data
}

export const fetchProduct = async (product_id: string) => {
  const res = await axios.get('/api/product', { params: { product_id } })
  return res.data
}

export const createProduct = async (data: any) => {
  const res = await axios.post('/api/product', data)
  return res.data
}

export const updateProduct = async (data: any) => {
  const res = await axios.put('/api/product', data)
  return res.data
}
