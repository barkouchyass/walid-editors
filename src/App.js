import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App bg-gray-50">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
