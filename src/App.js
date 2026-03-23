import './App.css';
import Footer from './components/Footer';
import PresentCard from './components/PresentCard';

import lixeiraImg from './assets/lixeira.jpg';
import panelasImg from './assets/panela.jpg';
import escovaImg from './assets/escova.jpg';
import escadaImg from './assets/escada3.jpg';
import rodoImg from './assets/rodo.png';
import ferroImg from './assets/ferroPassar.jpg';
import vassouraImg from './assets/vassoura.png';
import vassoura2Img from './assets/vassoura2.png';

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
            <p className="hero-desc">Estamos muito felizes por compartilhar esse momento com vocês!</p>
            <p className="hero-desc">Imagens e valores simbólicos. Sinta-se à vontade para escolher um presente e valor.</p>

          </div>
        </section>

        <section id="presentes" className="gifts-section">
          <h2 className="gifts-title">Nossos Presentes</h2>

          <div className="gifts-grid">
            {[
              { name: 'Lixeira de Pia', price: 40, image: lixeiraImg },
              { name: 'Escova de Lavar Roupa', price: 20, image: escovaImg },
              { name: 'Escada Três Degraus', price: 120, image: escadaImg },
              { name: 'Rodo', price: 25, image: rodoImg },
              { name: 'Ferro de Passar', price: 80, image: ferroImg }, 
              { name: 'Conjunto de Panelas', price: 350, image: panelasImg },        
              { name: 'Vassoura', price: 30, image: vassouraImg },       
              { name: 'Balde com cesto inox centrifuga e esfregão', price: 80, image: vassoura2Img },  
            ].map((g, i) => (
              <PresentCard key={g.name + i} name={g.name} price={g.price} image={g.image} emoji={g.emoji} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
