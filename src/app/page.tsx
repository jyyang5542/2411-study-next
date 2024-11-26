// import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
        <li>
          <Link href="/pub">1. 산출물 목록</Link>
        </li>
        <li>
          <Link href="/pub/xior/1">2. Xior 예제(동적 라우팅)</Link>
        </li>
        <li>
          <Link href="/pub/xior_array">3. Xior 예제(정적 라우팅)</Link>
        </li>
      </ul>
    </div>
  )
}
