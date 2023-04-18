import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Beranda, Cari, Category, Footer, Navbar } from './component/allComps';

function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='news-app/' element={<Beranda/>}/>
          <Route path='news-app/category/:category' element={<Category/>}/>
          <Route path='news-app/search/:search' element={<Cari/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
