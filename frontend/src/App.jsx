
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthForm from './pages/AuthForm'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/auth' element={<AuthForm/>} />
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/signup' element={<Register/>} />
    
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
