import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './componets/NavBar'
import LoginPage from './paginas/LoginPage'
import RegisterPage from './paginas/RegisterPage'
import HomePage from './paginas/HomePage'
import GuideDetails from './paginas/GuideDetailsPage'

function App() {
  

  return (
    <>
     <Router>

      <NavBar/>

        <Routes>

          <Route path='/teste-router' element={<HomePage/>}></Route>

          <Route path='/registrar' element={<RegisterPage/>}></Route>

          <Route path='/login' element={<LoginPage/>}></Route>

          <Route path='detalhes' element={<GuideDetails/>}></Route>
        
        </Routes>

     </Router>
    </>
  )
}

export default App
