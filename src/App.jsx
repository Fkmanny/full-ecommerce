import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home, Contact, Admin, Cart, OrderHistory, Login, Register, Reset } from  './pages';
import { Footer, Header } from './components'

function App() {
  const [first, setFirst] = useState("Zino")

  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/OrderHistory" element={<OrderHistory/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Reset" element={<Reset/>} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
