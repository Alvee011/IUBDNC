import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Events from './components/Events';
import Team from './components/Team';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </>
  );
}

export default App;
