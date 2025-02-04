import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import PortfolioNavbar from './components/PortfolioNavbar';


const App = () => (
  <BrowserRouter>
    <PortfolioNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Work" element={<Work />} />
    </Routes>
    
  </BrowserRouter>
);

export default App;