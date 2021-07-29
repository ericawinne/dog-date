import React, { useState } from "react"

function DogCard({ dog }) {
console.log(dog)

  return (
      <div className="card">
        <img src={dog.image} alt={dog.name} />
        <p>📍{dog.location}</p> 
      </div>
  )
}
export default DogCard;
