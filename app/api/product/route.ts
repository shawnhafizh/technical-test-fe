import axios from '@/lib/axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const product_id = searchParams.get('product_id')

  try {
    const res = await axios.get('/api/web/v1/product', {
      params: { product_id },
    })
    return NextResponse.json(res.data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  try {
    const res = await axios.post('/api/web/v1/product', body)
    return NextResponse.json(res.data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  try {
    const res = await axios.put('/api/web/v1/product', body)
    return NextResponse.json(res.data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}
