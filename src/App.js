
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <div className="App bg-slate-800">
      <Header/>
      <h1 className="text-3xl font-bold underline p-5 text-white">
      Hello world!
    </h1>
      <Footer/>
    </div>
  );
}

export default App;
