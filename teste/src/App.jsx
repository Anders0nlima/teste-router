import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './componets/NavBar'
import Footer from './componets/Footer'
import LoginPage from './paginas/LoginPage'
import RegisterPage from './paginas/RegisterPage'
import HomePage from './paginas/HomePage'
import GuideDetails from './paginas/GuideDetailsPage'
import AppRoutes from './routes'

function App() {
  

  return (
    <>
    <AppRoutes/>
   </>
  )
}

export default App
