import '@/assets/styles/guide.scss'

const projectName = '테스트'

export default function indexPage() {
  return (
    <section className="wrap guide">
      <div className="container">
        <div className="header">
          <div className="header-wrap">
            <h1>{projectName} 퍼블리싱 리스트</h1>
            <div className="guide-tab">
              <ul>
                <li>
                  <a href="#tab01" className="active">
                    퍼블 리스트
                  </a>
                </li>
                <li>
                  <a href="#tab02">UI 가이드</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="tab-content">
            <div id="tab01" className="pages-list">
              <div className="guide_tit">
                <h2>{projectName}</h2>

                <div className="table-date date-main">
                  <span className="table-text-wrap">
                    총 페이지:
                    <span className="main-text-total"></span>
                  </span>
                  <span className="table-text-wrap">
                    완료:
                    <span className="main-text-complete"></span>
                  </span>
                  <span className="table-text-wrap">
                    진척률:
                    <span className="main-text-process"></span>
                  </span>
                </div>
              </div>

              <div className="pages-list-wrap">
                <div className="pages-list-ver">
                  <div className="pages-list-cp">
                    <header className="sub-header type2">
                      <h3>common</h3>
                      <div className="table-date">
                        <span className="table-text-wrap">
                          페이지:
                          <span className="table-text-total"></span>
                        </span>
                        <span className="table-text-wrap">
                          완료:
                          <span className="table-text-complete"></span>
                        </span>
                        <span className="table-text-wrap">
                          진척률:
                          <span className="table-text-process"></span>
                        </span>
                      </div>
                    </header>
                    <div className="pages-table-wrap">
                      <table className="pages-table">
                        <thead>
                          <tr>
                            <th scope="col">1Depth</th>
                            <th scope="col">2Depth</th>
                            <th scope="col">3Depth</th>
                            <th scope="col">4Depth</th>
                            <th scope="col">화면 ID</th>
                            <th scope="col">시작일</th>
                            <th scope="col">완료일</th>
                            <th scope="col">상태</th>
                            <th scope="col">비고</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="ing">
                            <td>gnb</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <a href="./html_pc/gnb.html" target="_blank">
                                gnb
                              </a>
                            </td>
                            <td className="calendar-cell"></td>
                            <td></td>
                            <td>진행중</td>
                            <td className="etc"></td>
                          </tr>
                          <tr className="ing">
                            <td>footer</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <a href="./html_pc/footer.html" target="_blank">
                                footer
                              </a>
                            </td>
                            <td></td>
                            <td></td>
                            <td>진행중</td>
                            <td className="etc"></td>
                          </tr>
                          <tr className="done">
                            <td>footer</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <a href="./html_pc/footer.html" target="_blank">
                                footer
                              </a>
                            </td>
                            <td></td>
                            <td></td>
                            <td>완료</td>
                            <td className="etc"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="pages-list-cp">
                    <header className="sub-header type2">
                      <h3>main</h3>
                      <div className="table-date">
                        <span className="table-text-wrap">
                          페이지:
                          <span className="table-text-total"></span>
                        </span>
                        <span className="table-text-wrap">
                          완료:
                          <span className="table-text-complete"></span>
                        </span>
                        <span className="table-text-wrap">
                          진척률:
                          <span className="table-text-process"></span>
                        </span>
                      </div>
                    </header>
                    <div className="pages-table-wrap">
                      <table className="pages-table">
                        <thead>
                          <tr>
                            <th scope="col">1Depth</th>
                            <th scope="col">2Depth</th>
                            <th scope="col">3Depth</th>
                            <th scope="col">4Depth</th>
                            <th scope="col">화면 ID</th>
                            <th scope="col">시작일</th>
                            <th scope="col">완료일</th>
                            <th scope="col">상태</th>
                            <th scope="col">비고</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td>main</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <a href="./html_pc/main.html" target="_blank">
                                main
                              </a>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="etc"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="calendar"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-content ui-guide">
            <div id="tab02">
              <div className="guide-wrap">
                <h3>Flag & Badge</h3>
                <div className="guide-flag-wrap">
                  <div className="guide-flag">
                    <div className="flag">
                      <span></span>
                    </div>
                  </div>

                  <div className="guide-badge">
                    <div className="badge">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-wrap">
                <h3>Button</h3>
                <div className="guide-btn-wrap">
                  <div className="guide-btn">
                    <div className="b_btn">
                      <a href="">다운로드</a>
                    </div>
                  </div>
                  <div className="guide-btn">
                    <div className="w_btn">
                      <a href="">목록으로 돌아가기</a>
                    </div>
                  </div>
                  <div className="guide-btn">
                    <div className="more_btn">
                      <a href="">더보기</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-wrap">
                <h3>Search</h3>
                <div className="guide-search-wrap">
                  <div className="guide-search">
                    <div className="search_wrap">
                      <span className="list_nums">
                        총 <span className="count">20</span>건
                      </span>
                      <div className="search_box">
                        <div className="unit_box">
                          <input type="search" title="" placeholder="키워드를 입력해 주세요" />
                          <button className="search_btn">
                            <span className="blind">검색</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="guide-wrap">
                <h3>List</h3>
                <div className="guide-list-wrap">
                  <div className="guide-list">
                    <ul className="star_list">
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci minima dolorem nostrum quibusdam iure odio accusamus vitae rem sapiente!</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci minima dolorem nostrum quibusdam iure odio accusamus vitae rem sapiente!</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci minima dolorem nostrum quibusdam iure odio accusamus vitae rem sapiente!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
