import './App.css';
import Home from "./Components/Home/Home"
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Project from './Components/Projects/Project';

function App() {
  return (
    <div className='App'>
      <Home name="Kartik Joshi" />
      <Navbar />
      <Header />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;