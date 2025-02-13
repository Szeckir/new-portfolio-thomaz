import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import PortfolioNavbar from './components/PortfolioNavbar';
import Projects from './pages/Projects';


const App = () => (
  <BrowserRouter>
    <PortfolioNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Work" element={<Work />} />
      <Route path='/Projects' element={<Projects />} />
    </Routes>

  </BrowserRouter>
);

export default App;