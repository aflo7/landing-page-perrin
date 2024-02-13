import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function App() {
  return (
    <>
      <div className="nav-wrapper">
        <nav className="mobile-nav">
          <img
            className="perrin-logo"
            src="https://perrinwear.com/shop/wp-content/uploads/2021/12/2022-Perrin-Sportswear-Logo-2_WHITE.webp"
          />
          <GiHamburgerMenu className="burger-menu" />
          <div className="desktop-nav-right">
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <button className="apply-now-btn">Apply Now</button>
          </div>
        </nav>
      </div>

      <div className="main-wrapper">
        <main>
          <div>
            <div>
              <h2>Welcome to</h2>
              <h2>Perrin Sportswear</h2>
            </div>
            <p className="great-place-text">A Great Place to Build a Future</p>
          </div>
        </main>
      </div>
      <div className="history-text">
        A Little Hi<span className="story-span">story</span> Of Us
      </div>
    </>
  );
}
