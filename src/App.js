import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Molekul/Navbar/navbar';
import Home from './Pages/Home/home';
import WC from './Pages/World Cup/wc';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/wc' element={<WC/>}/>
      </Routes>
    </div>
  );
}

export default App;
