'use client'

import { Modal, Form, Input, InputNumber } from 'antd'
import { Product } from '@/types/product'
import { useEffect, useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  onSubmit: (values: Omit<Product, 'product_id' | 'created_timestamp' | 'updated_timestamp'>) => void
  loading: boolean
  initialData?: Product
}

export default function ProductFormModal({ open, onClose, onSubmit, loading, initialData }: Props) {
  const [form] = Form.useForm()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData)
    } else {
      form.resetFields()
    }
  }, [initialData, form])

  const handleFinish = (values: any) => {
    onSubmit(values)
  }

  if (!hasMounted) return null

  return (
    <Modal
      open={open}
      forceRender
      title={initialData ? 'Edit Product' : 'Create Product'}
      onCancel={onClose}
      onOk={() => form.submit()}
      confirmLoading={loading}
      okText={initialData ? 'Update' : 'Create'}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Title"
          name="product_title"
          rules={[{ required: true, message: 'Please enter product title' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="product_price"
          rules={[{ required: true, message: 'Please enter product price' }]}
        >
          <InputNumber style={{ width: '100%' }} min={0} />
        </Form.Item>

        <Form.Item label="Description" name="product_description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item label="Category" name="product_category">
          <Input />
        </Form.Item>

        <Form.Item label="Image URL" name="product_image">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}
