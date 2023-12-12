import './App.css';
import './assets/styles/navbar.css';
import './assets/styles/home.css';
import './assets/styles/footer.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
