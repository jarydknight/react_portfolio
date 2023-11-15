import { useState } from 'react';
import './App.css';
// import About from './components/about';
import Contact from './components/contact';
import Navigation from './components/navigation';
// import Projects from './components/projects';
import Homepage from './components/homepage';

function App() {
  const [currentCategory, selectCategory] = useState("Home");
  const handleNavClick = (category) => {
    selectCategory(category)
  }

  return (
    <div>
      <Navigation handleNavClick={handleNavClick}></Navigation>
      {/* <About></About>
      <Projects></Projects> */}
      <Homepage category={currentCategory}></Homepage>
      <Contact></Contact>
    </div>
  );
}

export default App;
