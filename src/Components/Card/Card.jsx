import React from 'react'
import './Card.css'

const Card = ({title}) => {
  return (
    <div className='card'>
      <p>{title}</p>
    </div>
  )
}

export default Card