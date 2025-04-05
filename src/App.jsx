import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Contact from './pages/Contact';
import Project1 from './Project1/Desktop8';
import './App.css';
import './menu.css';

function App() {
  return (
    <BrowserRouter>
      <div id="outer-container">
        <HamburgerMenu />
        <main id="page-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project1" element={<Project1 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const isAboutOrContactPage = location.pathname === "/about" || location.pathname === "/contact";

function HamburgerMenu() {
  const location = useLocation();
  const isAboutOrContactPage = location.pathname === "/about" || location.pathname === "/contact"; 

  return (
    <Menu
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      id="hamburgermenu"
      styles={{
        bmBurgerBars: {
          background: isAboutOrContactPage ? "black" : "white", 
        },
        bmBurgerBarsHover: {
          background: isAboutOrContactPage ? "black" : "#f0f0f0",
        },
      }}
    >
      <Link className="menu-item" to="/">Projects</Link>
      <Link className="menu-item" to="/about">About</Link>
      <Link className="menu-item" to="/contact">Contact</Link>
    </Menu>
  );
}

export default App;