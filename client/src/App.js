import './App.css';
import Footer from './components/footer';
import Navigation from './components/navigation';
import Projects from "./components/projects";
import About from "./components/about";
import Intro from "./components/intro";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from './components/contact';

function App() {
  return (
    <div className='app'>
      <BrowserRouter basename='/'>
          <Navigation></Navigation>
            <Routes>
              <Route exact path='/' element={<Intro />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/contact' element={<Contact />} />
            </Routes>
          <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
