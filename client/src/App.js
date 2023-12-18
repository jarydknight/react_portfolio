import { useState } from 'react';
import './App.css';
import Contact from './components/contact';
import Navigation from './components/navigation';
import Homepage from './components/homepage';

function App() {
  //State of category selected when user clicks on nav
  const [currentCategory, selectCategory] = useState("Home");
  const handleNavClick = (category) => {
    selectCategory(category)
  }

  return (
    <div>
      <Navigation handleNavClick={handleNavClick}></Navigation>
      <Homepage category={currentCategory}></Homepage>
      <Contact></Contact>
    </div>
  );
}

export default App;
