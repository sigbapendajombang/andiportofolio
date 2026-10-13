import './App.css';
import Header from './components/Header';
import About from './components/About';
import Activities from './components/Activities';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="portfolio-main">
        <About />
        <Projects />
        <Activities />
      </main>
      <Footer />
    </>
  );
}

export default App;
