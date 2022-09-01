import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark rounded-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home">useConext</Link>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav">
          <NavLink 
          className= { ({ isActive }) => `nav-link ${ isActive ? 'active': '' } `}
           to="/" >
            home
          </NavLink>

          <NavLink 
          className={(args) => {
            console.log(args)
            return 'nav-link'

          }}
           to="/about" >
            about
          </NavLink>

          <NavLink 
          className={(args) => {
            console.log(args)
            return 'nav-link'

          }}
           to="/Login" >
            login
          </NavLink>
        
        </ul>
      </div>
    </div>
  </nav>
  )
}
