'use client'

import { Table, Button, Space, Tooltip } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Product } from '@/types/product'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import styles from './ProductTable.module.css'

interface Props {
  data: Product[]
  loading: boolean
  onEdit: (product: Product) => void
  onDelete: (product: Product) => void
  pagination: {
    current: number
    pageSize: number
    total: number
    onChange: (page: number, pageSize: number) => void
  }
}

export default function ProductTable({ data, loading, onEdit, onDelete, pagination }: Props) {
  const columns: ColumnsType<Product> = [
    {
      title: 'Title',
      dataIndex: 'product_title',
      width: 150,
    },
    {
      title: 'Price',
      dataIndex: 'product_price',
      render: (price) => `Rp ${price.toLocaleString('id-ID')}`,
      width: 120,
    },
    {
      title: 'Category',
      dataIndex: 'product_category',
      width: 120,
    },
    {
      title: 'Description',
      dataIndex: 'product_description',
      render: (desc: string) =>
        desc ? (
          <Tooltip title={desc}>
            <div className={styles.descriptionCell}>{desc}</div>
          </Tooltip>
        ) : (
          '-'
        ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => onEdit(record)} />
          <Button icon={<DeleteOutlined />} danger onClick={() => onDelete(record)} />
        </Space>
      ),
      width: 100,
      align: 'center',
    },
  ]

  return (
    <Table
      rowKey="product_id"
      dataSource={data}
      columns={columns}
      loading={loading}
      pagination={pagination}
      scroll={{ x: true }}
    />
  )
}
