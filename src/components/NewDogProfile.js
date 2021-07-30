import React, { useState } from "react"

function NewDogProfile({ onAddDog }) {   //NewPlantForm
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [hobby, setHobby] = useState("")
  const [trick, setTrick] = useState("")
  const [location, setLocation] = useState("")
  const [image, setImage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:4000/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        hobby: hobby,
        trick: trick,
        location: location,
        image: image,
      }),
    })
      .then((r) => r.json())
      .then((newDog) => onAddDog(newDog));
  }

  return (
    <div className="new-Dog-form">
      <h2>Add Your Dog Here!⬇️</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name and/or Nickname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"   //since its an array do i do something different here?
          name="hobby"
          placeholder="Favorite Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <input
          type="text"
          name="tricks"  //since its an array, do i do something different here?
          placeholder="Best Trick"
          value={trick}
          onChange={(e) => setTrick(e.target.value)}
        />
        <input
          type="text"
          name="location"
          step="0.01"
          placeholder="City, State"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Paste an Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" onClick={() => alert("Thank you for submitting a new dog!💕")} >✅Submit to DogDate!</button>
      </form>
    </div>
  );
}

export default NewDogProfile