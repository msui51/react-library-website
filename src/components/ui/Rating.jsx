import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Rating({rating}) {
  return (
   <div className="book__ratings">
                         {
                           new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="fa-solid fa-star"  key={index}/>)
                         }
                         {
                           Number.isInteger(rating) ? '' : <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
                         }
                       </div>
  )
}