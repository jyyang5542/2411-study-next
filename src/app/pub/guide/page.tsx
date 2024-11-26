'use client'

import '@/styles/guide.scss'
import styles from '@/styles/style.module.scss'

const PubGuide = () => {
  const pageList = [
    { dep1: 'Dep1', dep2: 'Dep2', dep3: 'Dep3', dep4: 'Dep4', dep5: 'Dep5', path: 'path', screenId: 'PAGE_ID', status: '', sDate: '2024-mm-dd', eDate: '2024-mm-dd', etc: '-' },
    { dep1: 'Dep1', dep2: 'Dep2', dep3: 'Dep3', dep4: 'Dep4', dep5: 'Dep5', path: 'path', screenId: 'PAGE_ID', status: '완료', sDate: '2024-mm-dd', eDate: '2024-mm-dd', etc: '-' },
  ]
  // 완료된 페이지 수 계산
  const completedCount = pageList.filter(page => page.status === '완료').length

  // 진척률 계산
  const progressRate = Math.floor((completedCount / pageList.length) * 100)

  return (
    <section className="guide">
      <h1 className="guide-title">산출물 목록</h1>
      <div className="guide-status">
        <p>
          총 페이지 수 : <b>{pageList.length}</b>
        </p>
        <p>
          완료 : <b>{completedCount}</b>
        </p>
        <p>
          진척률 : <b>{progressRate}%</b>
        </p>
      </div>
      <div className="guide-table-wrapper">
        <table className="guide-table">
          <thead>
            <tr>
              <th scope="col">1 Depth</th>
              <th scope="col">2 Depth</th>
              <th scope="col">3 Depth</th>
              <th scope="col">4 Depth</th>
              <th scope="col">5 Depth</th>
              <th scope="col">URL</th>
              <th scope="col">상태</th>
              <th scope="col">착수일</th>
              <th scope="col">완료일</th>
              <th scope="col">비고</th>
            </tr>
          </thead>
          <tbody>
            {pageList.map((page, index) => (
              <tr key={index}>
                <td>{page.dep1}</td>
                <td>{page.dep2}</td>
                <td>{page.dep3}</td>
                <td>{page.dep4}</td>
                <td>{page.dep5}</td>
                <td>
                  <a href={'/pub/' + page.path + '/' + page.screenId}>{page.screenId}</a>
                </td>
                <td className={styles.txtCenter}>{page.status}</td>
                <td className={styles.txtCenter}>{page.sDate}</td>
                <td className={styles.txtCenter}>{page.eDate}</td>
                <td>{page.etc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PubGuide
