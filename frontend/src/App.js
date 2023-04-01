import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar1';
import Home from './component/home';
import Flying from './component/Flying';
import Footer from './component/Footer';
import About from './component/About';
import HomePortal from './component/homePortal';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePortal/>
      
    </div>
  );
}

export default App;
