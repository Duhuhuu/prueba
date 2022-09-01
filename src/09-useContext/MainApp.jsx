import { Navigate, Route, Routes, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>

      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element ={ <HomePage/> } />
        <Route path="login" element ={ <LoginPage/> } />
        <Route path="about" element ={ <AboutPage/> } />

        {/* Tecnica para redireccionar la pagina por si sale algun error o algo parecido */}
        {/* <Route path="/*" element={ <LoginPage /> }/> */}

        <Route path="/*" element= { <Navigate to="/about" /> } />

      </Routes>
    </UserProvider>


  )
}
