import React from 'react';
import './App.css';

function App() {
  return (
    <div id="app">
      <header className="profile-header">
        <h1>WEI-CHEN-ZHENG</h1>
        <h2>鄭暐宸</h2>
        <h3>淡江大學資訊管理學系三年級</h3>
        <p>作業!!</p>
      </header>

      <section className="skills-section card">
        <h4>技能</h4>
        <ul>
          <li>Python Programming</li>
          <li>LINE BOT製作</li>
        </ul>
      </section>

      <section className="contact-section card">
        <h4>聯絡方式</h4>
        <ul>
          <li><strong>Line ID:</strong> weichen</li>
          <li><strong>Email:</strong> z6901775@gmail.com</li>
        </ul>
      </section>

      <section className="experience-section card">
        <h4>經歷</h4>
        <ul>
          <li>
            <em>2022-2023</em>&nbsp;<strong>大學一年級</strong>
            <ol>
              <li>舞社幹部</li>
              <li>書卷</li>
              <li>Adobe-Photoshop-CC</li>
            </ol>
          </li>
          <li>
            <em>2023-2024</em>&nbsp;<strong>大學二年級</strong>
            <ol>
              <li>無</li>
            </ol>
          </li>
          <li>
            <em>2024-2025</em>&nbsp;<strong>大學三年級</strong>
            <ol>
              <li>無</li>
            </ol>
          </li>
        </ul>
      </section>

      <section className="certification-section card">
        <h4>證照</h4>
        <div className="cert-item">
          <h5>Adobe-Photoshop-CC</h5>
          <img
            width="150"
            src="https://www.dgd.stu.edu.tw/2021/03/10/109%E5%AD%B8%E5%B9%B4%E5%BA%A6%E7%AC%AC%E4%BA%8C%E5%AD%B8%E6%9C%9F%E3%80%8Csse-adobe-after-effects-cc%E5%9C%8B%E9%9A%9B%E8%AD%89%E7%85%A7%E8%BC%94%E5%B0%8E%E7%8F%AD%E3%80%8D/"
            alt="Adobe Photoshop CC"
          />
        </div>
      </section>

      <section className="cert-info-section card">
        <h4>證照資訊</h4>
        <table>
          <thead>
            <tr>
              <th>證照名稱</th>
              <th>證照資訊</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adobe-Photoshop-CC</td>
              <td>
                <a href="https://www.dgd.stu.edu.tw/2021/03/10/109%E5%AD%B8%E5%B9%B4%E5%BA%A6%E7%AC%AC%E4%BA%8C%E5%AD%B8%E6%9C%9F%E3%80%8Csse-adobe-after-effects-cc%E5%9C%8B%E9%9A%9B%E8%AD%89%E7%85%A7%E8%BC%94%E5%B0%8E%E7%8F%AD%E3%80%8D/">
                  檢視證照資訊
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="comments-section card">
        <h4>其他</h4>
        <form action="/submit" method="post">
          <label htmlFor="comment">發送留言:</label>
          <input type="text" id="comment" name="comment" placeholder="輸入留言" />
          <input type="submit" value="提交" />
        </form>
        <p><span className="highlight">留言功能暫不開放</span></p>
      </section>
    </div>
  );
}

export default App;
