import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop = ({data}) => {
  return (
    <div>
        <Outlet/>
        {data.map(item => <Link key={item.id} to={item.id}><li>{item.title}</li></Link>)}
    </div>
  )
}

export default Shop