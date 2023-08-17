import Layout from '@/components/Layout/Layout'
import React from 'react'

export default function page({children}) {
  return (
    <>
    <Layout>
      {children}
    </Layout>
    </>
  )
}
