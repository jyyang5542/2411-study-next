// import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/style.module.scss'

export default function Home() {
  return (
    <div className={`${styles.flex} ${styles.aCenter} ${styles.jCenter}`} style={{ width: '100%', height: '100vh' }}>
      <ul className={`${styles.flex} ${styles.column} ${styles.gap10} ${styles.txtCenter}`}>
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
