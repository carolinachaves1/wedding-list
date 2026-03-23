import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PresentCard from './components/PresentCard';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <main className="App-main">
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-heart" aria-hidden>❤</div>
            <h2 >Lista de Casamento</h2>
            <p className="hero-couple">Carol & Victor</p>
            <p className="hero-desc">Estamos muito felizes por compartilhar esse momento com vocês! Escolha um presente e contribua via Pix.</p>
          </div>
        </section>

        <section id="presentes" className="gifts-section">
          <h2 className="gifts-title">Nossos Presentes</h2>

          <div className="gifts-grid">
            {[
              { name: 'Jogo de Toalhas', price: 150, emoji: '🛁' },
              { name: 'Jogo de Panelas', price: 350, emoji: '🍳' },
              { name: 'Cafeteira Elétrica', price: 250, emoji: '☕' },
              { name: 'Jogo de Cama Casal', price: 280, emoji: '🛏️' },
              { name: 'Aspirador de Pó', price: 400, emoji: '🧹' },
              { name: 'Liquidificador', price: 180, emoji: '🥤' },
              { name: 'Air Fryer', price: 450, emoji: '🍗' },
              { name: 'Ferro de Passar', price: 120, emoji: '👕' },
            ].map((g, i) => (
              <PresentCard key={g.name + i} name={g.name} price={g.price} emoji={g.emoji} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
