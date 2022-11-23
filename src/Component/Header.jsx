import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes'

const Header = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h3 onClick={() => navigate(-1)}>⬅Back</h3>
        <Link to={routes.home}>Home</Link>{" "}
        <Link to={routes.shop}>Shop</Link>{" "}
        <Link to={routes.contact}>Contact</Link>

    </div>
  )
}

export default Header