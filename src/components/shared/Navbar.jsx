import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import { logout } from '../../store/features/user/authSlice'

const Navbar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token, infoUser } = useSelector(state => state.auth)

  const signout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
     <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
        <NavLink className="navbar-brand" to="/">Bright Store</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/store">Store</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            { token && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link"></NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={signout}>Logout</button>
                </li>
              </>
            ) }
            
            { !token && (

              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
            )}
          </ul>
          
        </div>
       </div>
     </nav>
     
    </>
  )
}

export default Navbar