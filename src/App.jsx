
import './index.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Homepage/Services';
import ServiceDetail from './Pages/ServicesDetailPage/ServicesDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
  <Router>
   <Navbar />
   <main>
     
     <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
     </Routes>
    
   </main>
   <Footer />
   </Router>
  );
}

export default App;
