import "./Welcome.css";
import Navbar from "../components/Navbar"
import {  useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="hero">
        <Navbar />

        <div className="hero-content">
          <h1>Discover the Beauty of Natural Gemstones</h1>

          <p>
            Explore our exclusive collection of premium gemstones,
            carefully selected for their brilliance, rarity, and quality.
          </p>

          <div className="buttons">
            <button className="btn-primary" onClick={() => navigate("/Collection")}>Explore Collection</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="card">
          <div className="icon">💎</div>
          <h3>Premium Gems</h3>
          <p>Handpicked natural gemstones with certified quality.</p>
        </div>

        <div className="card">
          <div className="icon">🌍</div>
          <h3>Worldwide Shipping</h3>
          <p>Safe and secure delivery to customers around the globe.</p>
        </div>

        <div className="card">
          <div className="icon">⭐</div>
          <h3>Trusted Quality</h3>
          <p>Years of expertise delivering authentic gemstones.</p>
        </div>
      </section>
    </div>
  );
}

export default Welcome;