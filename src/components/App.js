import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import DogFinder from "./DogFinder"
import DogDates from "./DogDates"
import NewDogProfile from "./NewDogProfile"

function App() {
  const [dogs, setDogs] = useState([]) 
  const [currentDog, setCurrentDog] = useState(0)
  const [currentDogInfo, setCurrentDogInfo] = useState(null)

  function handleAddDog(newDog) {
    const updatedDogFinderArray = [...dogs, newDog]
    setDogs(updatedDogFinderArray)
  }

  const handleLikedToggle = () => {
    const updateObj = {
      matched: !currentDogInfo.matched
    };
    alert("✨✨💕It's a Match!💕✨✨")

    fetch(`http://localhost:4000/dogs/${currentDogInfo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(data => setCurrentDogInfo(data))
  }

  const handleNextDog = () => {
    console.log(dogs.length, currentDog)
    if(currentDog < dogs.length-1) {
      setCurrentDog(currentDog => currentDog + 1)
    }
    else {
      setCurrentDog(0)
    }
  }
  
  useEffect(() => {
    fetch("http://localhost:4000/dogs")
    .then((response) => response.json())
    .then(data => {
      setDogs(data) 
      setCurrentDogInfo(data[currentDog])
    })
  }, [currentDog])

  if(!currentDogInfo){
    return <div>Loading...</div>
  }

  return (
    <div>
    <NavBar />
    <Switch>
        <Route exact path="/">
            <DogFinder 
                onLiked={handleLikedToggle} 
                currentDogInfo={currentDogInfo} 
                onNextDog={handleNextDog}
            />
        </Route>
        <Route path="/NewDogProfile">
            <NewDogProfile onAddDog={handleAddDog}/>
        </Route>
        <Route path="/DogDates">
            <DogDates dogs={dogs}/>
        </Route>
    </Switch>
</div>
)
}

export default App