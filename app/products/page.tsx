'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Input, Modal, Space, Typography, Layout, Row, Col } from 'antd'
import ProductTable from '@/components/ProductTable'
import ProductFormModal from '@/components/ProductFormModal'
import { Product } from '@/types/product'
import { createProduct, fetchProducts, updateProduct, deleteProduct } from '@/hooks/useProducts'
import styles from './products.module.css'

const { Content } = Layout

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | undefined>()
  const [modalLoading, setModalLoading] = useState(false)

  const loadData = async () => {
    setLoading(true)
    try {
      const res = await fetchProducts({ page, limit: 10, search })
      setProducts(res.data)
      setTotal(res.pagination.total)
    } catch (e) {
      console.error('Gagal fetch produk:', e)
    } finally {
      setLoading(false)
    }
  }


  const handleCreate = () => {
    setEditingProduct(undefined)
    setIsModalOpen(true)
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setIsModalOpen(true)
  }

  const handleDelete = async (product: Product) => {
    Modal.confirm({
      title: 'Are you sure?',
      content: `Do you want to delete "${product.product_title}"?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        try {
          await deleteProduct(product.product_id)
          loadData()
        } catch (e) {
          console.error('Gagal hapus produk:', e)
        }
      },
    })
  }

  const handleSubmit = async (formValues: any) => {
    setModalLoading(true)
    try {
      if (editingProduct) {
        await updateProduct({ ...editingProduct, ...formValues })
      } else {
        await createProduct(formValues)
      }
      setIsModalOpen(false)
      loadData()
    } catch (e) {
      console.error('Failed to submit form', e)
    } finally {
      setModalLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [page, search])

  return (
    <Layout className={styles.pageLayout}>
      <Content className={styles.content}>
        <Card className={styles.card}>
          <Space direction='vertical' size="large" style={{ width: '100%' }}>
            <Row justify="space-between" align="middle">
              <Col>
                <Typography.Title level={2} className={styles.pageTitle}>Product Management</Typography.Title>
              </Col>
              <Col>
                <Space>
                  <Input.Search
                    placeholder="Search products..."
                    allowClear
                    onSearch={(value) => {
                      setSearch(value)
                      setPage(1)
                    }}
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setSearch('')
                      }
                    }}
                    className={styles.searchBar}
                  />
                  <Button type="primary" onClick={handleCreate}>
                    Create Product
                  </Button>
                </Space>
              </Col>
            </Row>

            <ProductTable
              data={products}
              loading={loading}
              pagination={{
                current: page,
                pageSize: 10,
                total,
                onChange: (newPage) => setPage(newPage),
              }}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Space>
        </Card>
        <ProductFormModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          loading={modalLoading}
          initialData={editingProduct}
        />
      </Content>
    </Layout>
  )
}
