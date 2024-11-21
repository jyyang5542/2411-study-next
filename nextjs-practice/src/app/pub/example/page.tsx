'use client'

import { useEffect, useState } from 'react'
import { useFetch } from '@/hooks/useFetch'

const ExamplePage = () => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await useFetch<any>('/posts/1')
        setData(result)
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Example Page</h1>
      {error && <p>Error: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  )
}

export default ExamplePage
