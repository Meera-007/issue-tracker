//import { Switch } from "@mui/material";
import React, { useContext} from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../useContext";

const NavBar = ({ darkTheme, setDarkTheme }) => {

  const navigate = useNavigate();
  
  const {loggedIn, setLoggedIn, currentUser} = useContext(UserContext);
  // const [currentUser, setCurrentUser] = useState(
  //   JSON.parse(sessionStorage.getItem("user"))
  // );



  const logout = () => {
    sessionStorage.removeItem("user")
    setLoggedIn(false)
    navigate('/login');
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <a className="navbar-brand mt-2 mt-lg-0" href="">
              <img
                src="https://st2.depositphotos.com/2100659/6870/v/950/depositphotos_68708405-stock-illustration-letter-a-vector-logo-concept.jpg"
                height="35"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
          

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Register">
                Register
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Track">
                Track
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Issues">
                Add Issues
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/Team">
                Create team
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/AddMember">
                Add Member
              </NavLink>
            </li>
            {/* <li class="nav-item">
              <Switch checked={darkTheme} onChange={(e, v)=> {setDarkTheme(v) }} ></Switch>
            </li> */}

          </ul>
        </div>

          {loggedIn ? (
        <div class="d-flex align-items-center">
          <span className="me-2">Hi, {currentUser ? currentUser.name : ''}!</span>
          <div class="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
        
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
            <li>
                <button className="dropdown-item" >
                  Settings
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
          ) : (
            ""
          )}
      </div>
    </nav>
  )
}

export default NavBar;