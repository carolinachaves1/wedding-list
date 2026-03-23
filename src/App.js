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
import portaTemperosImg from './assets/temperos.png';
import baldesImg from './assets/baldes.jpg';
import kitVassouraRodoImg from './assets/kitVassoura.jpg';
import salImg from './assets/saleiro.jpg'
import panelaEletricaImg from './assets/panelaPressao.jpg';
import microondasImg from './assets/microondas.jpg';

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
              { name: 'Baldes', price: 30, image: baldesImg },
              { name: 'Kit Vassoura/Rodo', price: 60, image: kitVassouraRodoImg },
              { name: 'Ferro de Passar', price: 80, image: ferroImg }, 
              { name: 'Conjunto de Panelas', price: 350, image: panelasImg },        
              { name: 'Porta Temperos', price: 80, image: portaTemperosImg },  
              { name: 'Saleiro/Açucareiro', price: 50, image: salImg },  
              { name: 'Panela Elétrica', price: 300, image: panelaEletricaImg },
              { name: 'Micro-ondas', price: 500, image: microondasImg }

            ].sort((a, b) => a.price - b.price).map((g, i) => (
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
