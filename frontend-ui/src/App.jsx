import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path='/login' element ={<Login/>}/>
          <Route path='/dashboard' element ={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
