import React from 'react'

export const FooterMain = () => (
  <section className="footer-main">
    <div className="page-sizer">
      <div className="footer-main-content">
        <div className="footer-main-item">
          <h3>Weekly Pick</h3>
          <img src="../src/assets/images/solid-satin@1.5x.jpg" alt="style-guide" />
        </div>
        <div className="footer-main-item">
          <h3>Loop us in</h3>
          <p>Tightly knotted or hanging loose? fotted suit or selvedge denim? share your style with us.</p>
          <a href="#" className="facebook"></a>
          <a href="#" className="pinterest"></a>
          <a href="#" className="twitter"></a>
        </div>
        <div className="footer-main-item quarterly">
          <h3>The Quarterly</h3>
          <p>Our newsletter is simple and brief for the hard-pressed gentleman.</p>
          <form action="#" className="email-form">
            <input type="email" placeholder="example@example.com" required />
            <button type="submit" className="button">SUSCRIBE ME</button>
          </form>
        </div>
        <div className="footer-main-item style-guide">
          <h3>Style guide</h3>
          <img src="../src/assets/images/style-guide@1.5x.jpg" alt="style-guide" />
          <p>There are eighty-five ways to <a href="#">knot a tie</a>. We’ll show you <a href="#">the essentials</a>.</p>
        </div>
      </div>
  </div>
</section>
)