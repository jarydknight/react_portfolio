import './App.css';
import Footer from './components/footer';
import Navigation from './components/navigation';
import Projects from "./components/projects";
import About from "./components/about";
import Intro from "./components/intro";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  //State of category selected when user clicks on nav
  // const [currentCategory, selectCategory] = useState("/");
  // const handleNavClick = (category) => {
  //   selectCategory(category)
  // }

  return (
    <div className='app'>
      <BrowserRouter basename='/'>
          <Navigation></Navigation>
          {/* <Homepage category={currentCategory}></Homepage> */}
            <Routes>
              <Route exact path='/' element={<Intro />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/projects' element={<Projects />} />
            </Routes>
          <Footer></Footer>
      </BrowserRouter>
      
    </div>
    // <div className='app'>
    //    <Navigation handleNavClick={handleNavClick}></Navigation>
    //     <Homepage category={currentCategory}></Homepage>
    // </div>
  );
}

export default App;
