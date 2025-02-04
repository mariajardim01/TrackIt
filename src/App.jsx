import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./Reset.css"
import "./style.css"
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UserContext from './context/UserConstext'
import HabitsPage from './pages/HabitsPage'
import PageContext from './context/PageContext'
import TodayPage from './pages/TodayPage'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [photo, setPhoto] = useState("")
  const [token, setToken] = useState("")
  const [page, setPage] = useState("")


  return(
<>
  <PageContext.Provider value={{page,setPage}} >
  <UserContext.Provider value={{name, setName, email, setEmail, password, setPassword, photo, setPhoto, token, setToken}}>
  <BrowserRouter>

  
  <Routes>
  <Route path='/hoje' element = {<TodayPage/>} />
  <Route path='/habitos' element = {<HabitsPage />} />
    <Route path='/cadastro' element = {<RegisterPage />} />
    <Route path='/' element = {<LoginPage />} />
  </Routes>
  </BrowserRouter>
  </UserContext.Provider>
  </PageContext.Provider>
  </>
  )
}

export default App
