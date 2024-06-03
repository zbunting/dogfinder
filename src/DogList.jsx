/** Dog List Component
 *
 *  Props: fetchDogs, dogs
 *  State: None
 *
 */

async function DogList({ fetchDogs, dogs }) {

  if (dogs.length === 0) {
    const response = await fetch("localhost:5001/dogs");
    const result = await response.json();
    fetchDogs(result);
  }

  return (
    <ul>
      {result.map(dog => (
        <li>
          <b>dog.name</b>, <img src={dog.src}></img>
        </li>
      ))}
    </ul>
  );
}

export default DogList;