import './App.css';
import Navbar from './Components/Navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import product from './Pages/product';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<shopCategory category="mens"/>}/>
        <Route path='/womens' element={<shopCategory category="womens"/>}/>
        <Route path='/kids' element={<shopCategory category="kids"/>}/>
        <Route path="/product" element={<product/>}>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
