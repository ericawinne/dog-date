import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import DogFinder from "./DogFinder"
import DogDates from "./DogDates"
import NewDogProfile from "./NewDogProfile"
import Home from "./Home"

function App() {
  const [dogs, setDogs] = useState([]) 
  const [currentDog, setCurrentDog] = useState(0)
  const [currentDogInfo, setCurrentDogInfo] = useState(null)

  function handleAddDog(newDog) {
    const updatedDogFinderArray = [...dogs, newDog]
    setDogs(updatedDogFinderArray)
  }

  const handleLikedToggle = (id) => {
    const updateObj = {
      matched: !currentDogInfo.matched
    };
    if (currentDogInfo.matched === false) {
      alert("✨✨💕It's a Match!💕✨✨")
    }

    fetch(`http://localhost:4000/dogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(data => {
        const updatedDogs = dogs.map(dog => {
          if (dog.id === data.id) {
            setCurrentDogInfo(data)
            return data
          } else return dog
        })
        setDogs(updatedDogs)
      })
  }

  const handleNextDog = () => {
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
        <Route  path="/DogFinder">
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
            <DogDates dogs={dogs} onUnMatch={handleLikedToggle} />
        </Route>
        <Route exact path="/" >
            <Home />
        </Route>
    </Switch>
</div>
)
}

export default App