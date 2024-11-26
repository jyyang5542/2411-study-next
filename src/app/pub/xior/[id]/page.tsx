'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import http from '@/libs/http'

interface Post {
  id: string
  title: string
  content: string
}

const PostDetails: React.FC = () => {
  const params = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        if (params?.id) {
          const { data } = await http.get<Post>(`/api/posts/${params.id}`)
          setPost(data)
        }
      } catch (err) {
        setError('Failed to fetch post')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params?.id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  )
}

export default PostDetails
