import React from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Product from './component/Product';
// import { BrowserRouter, Route,Routes} from "react-router-dom"

 const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Men/>}/>
      </Routes>
      </BrowserRouter> */}
      <Product />
      <Footer/>
    </div>
  )
}

export default App;
