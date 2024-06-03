/** Dog List Component
 *
 *  Props: fetchDogs, dogs
 *  State: None
 *
 */

function DogList({ fetchDogs, dogs }) {

  async function renameThis() {
    const response = await fetch("http://localhost:5001/dogs");
    const result = await response.json();
    console.log({ result });
    fetchDogs(result);
  }

  // console.log({ dogs });

  return (
    <ul>
      {dogs.length === 0 &&
        <button onClick={renameThis}>Get Dogs!</button>
      }
      {dogs.length !== 0 &&
        dogs.map(dog => (
          <li>
            <b>dog.name</b>
            <img src={`./public/${dog.src}.jpg`} alt={`Picture of ${dog.name}`} />
          </li>
        ))
      }
    </ul>
  );
}

export default DogList;