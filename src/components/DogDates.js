import React from "react"

function DogDates({ dogs }) {
  const likeDogs = dogs.filter(dog => dog.matched === true)
    
    return (
      <div className="card">
        <ul>
          {likeDogs.map((match) => {
          return (
            <div>
              <li>{match.name} "{match.nickname}"</li>
              <li>📍 {match.location}</li>
              <li>age: {match.age}</li>
              <img src={match.image}
              alt={match.name}/>
            </div>
          )
          })}
        </ul>
      </div>
    );
  }


export default DogDates

 /* map thro liked dogs, create list item with what we want to pass through */




