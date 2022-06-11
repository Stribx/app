import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import Agent from './pages/Agent';
import Ksos from './pages/Ksos';
import Navi from './pages/Navi';
import { Route, Routes} from "react-router-dom"

export default function App() {
  return (
  <>
   <Nav />
   <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Navi' element={<Navi />} />
      <Route path='/Ksos' element={<Ksos/>} />
      <Route path='/Agent' element={<Agent />} />
    </Routes>
   </div>
  </>
  );
}