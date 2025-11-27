import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LiveNavigation from './pages/LiveNavigation';
import Categories from './pages/Categories';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navigate" element={<LiveNavigation />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
