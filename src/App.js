import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import "./index.css";

//pages
import Home from './pages/Home'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Admission from './pages/Admission'
import ContactUs from './pages/ContactUs'
import Dashboard from './pages/Dashboard'

function App() {
  const [user, setUser] = useState(null);
  return (
       <div className="App">
 <BrowserRouter>
      <nav>
        <h1>Neverland</h1>
        <Link to='/'>Home</Link> 
        <Link to='/menu'>Menu</Link>
        <Link to='/services'>Services</Link>
                <Link to='/admission'>Admission</Link>
        <Link to='/contactus'>ContactUs</Link>
         </nav>
   <Routes>    
        <Route path='/' element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/services' element={<Services />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/contactus' element={<ContactUs setUser={setUser}></ContactUs>} />
        <Route path='dashboard' element={<Dashboard user={user} />} />
   </Routes>  
 </BrowserRouter>
         </div>
  )
}

export default App;