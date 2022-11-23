import React from 'react'
import { useParams } from 'react-router-dom'

const Card = ({data}) => {
    const params = useParams()
    let itemCard = data.find(item => item.id === params.idItem)
    console.log(params)
    console.log(itemCard)
  return (
    <div>
        <h2>{itemCard?.title}</h2>
        <img src={itemCard?.thumbnail} alt="" />
    </div>
  )
}

export default Card