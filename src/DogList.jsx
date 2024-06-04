
/** Dog List Component
 *
 * Props:
 * dogs: array of objects
 * eg. [ { name: string, age: number, src: string, facts: ["string"...] } ...]
 *
 * State:
 * None
 *
 * App -> DogList
 *
 */

function DogList({ dogs }) {

  //NOTE: uuid() would be safer key if names can be dupes
  return (
    <ul>
      {
        dogs.map(dog => (
          <li key={dog.name}>
            <b>{dog.name}</b>
            <img src={`/${dog.src}.jpg`} alt={`${dog.name}`} />
          </li>
        ))
      }
    </ul>
  );
}

export default DogList;