import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Events from './components/Events';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Journey />
        <Events />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
