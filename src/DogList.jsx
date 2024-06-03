import { useState } from "react";

/** Dog List Component
 *
 * Props:
 * fetchDogs: function
 * dogs: array of objects
 * eg. [ { name: string, age: number, src: string, facts: ["string"...] } ...]
 *
 * State:
 * None
 *
 * App -> DogList
 *
 */

function DogList({ fetchDogs, dogs }) {
  if(dogs.length === 0) {
    fetchDogs();
    return <p>Loading...</p>
  }

  return (
    <ul>
      {dogs.length !== 0 &&
        dogs.map(dog => (
          <li key={dog.name}>
            <b>{dog.name}</b>
            <img src={`/${dog.src}.jpg`} alt={`Picture of ${dog.name}`} />
          </li>
        ))
      }
    </ul>
  );
}

export default DogList;