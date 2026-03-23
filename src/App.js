import './App.css';
import Footer from './components/Footer';
import PresentCard from './components/PresentCard';

import lixeiraImg from './assets/lixeira.jpg';
import panelasImg from './assets/panela.jpg';
import escadaImg from './assets/escada3.jpg';
import ferroImg from './assets/ferroPassar.jpg';
import portaTemperosImg from './assets/temperos.png';
import baldesImg from './assets/baldes.jpg';
import kitVassouraRodoImg from './assets/kitVassoura.jpg';
import salImg from './assets/saleiro.jpg'
import panelaEletricaImg from './assets/panelaPressao.jpg';
import microondasImg from './assets/microondas.jpg';
import cafeteiraImg from './assets/cafeteira.jpg';
import jogoCamaImg from './assets/jogoCama.jpg';
import toalhasImg from './assets/toalhas.jpg';
import cookTopImg from './assets/cooktop.jpg';
import mesaCadeirasImg from './assets/mesaCadeiras.jpg';
import cristaleiraImg from './assets/cristaleira.jpg';
import rackImg from './assets/rack.jpg';

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
              { name: 'Micro-ondas', price: 500, image: microondasImg },
              { name: 'Escada Três Degraus', price: 120, image: escadaImg },
              { name: 'Cafeteira Elétrica', price: 150, image: cafeteiraImg },
              { name: 'Jogo de Cama Casal', price: 170, image: jogoCamaImg },
              { name: 'Toalhas de Banho - 5 peças', price: 150, image: toalhasImg },
              { name: 'Cooktop 4 Bocas', price: 2000, image: cookTopImg },
              { name: 'Mesa de Jantar + 4 Cadeiras', price: 1200, image: mesaCadeirasImg },
              { name: 'Cristaleira', price: 800, image: cristaleiraImg },
              { name: 'Rack para TV', price: 600, image: rackImg },

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
