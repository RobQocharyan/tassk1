import './App.scss';
import { Header } from './Component/Header/Header';
import { Welbex } from './Component/Welbex/Welbex';
import { Footer } from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Welbex />
      <Footer />
    </div>
  );
}

export default App;
