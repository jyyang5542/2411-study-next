'use client'

import React, { useEffect, useState } from 'react'
import http from '@/libs/http'

interface Post {
  id: string
  title: string
  content: string
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data } = await http.get<Post[]>('/api/posts/array') // 서버에서 배열 반환
        if (Array.isArray(data)) {
          setPosts(data)
        } else {
          throw new Error('Expected an array but got a different structure')
        }
      } catch (err) {
        setError('Failed to fetch posts')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
