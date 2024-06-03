import { useParams } from "react-router-dom";

/** DogDetails Component
 *
 * Props:
 * dog: object
 * eg. { name: string, age: number, src: string, facts: ["string"...] }
 *
 * State:
 * None
 *
 *
 * DogFinder -> DogDetails
 */

function DogDetails({ dog }) {
  if (!dog) return <p>No dog found: {dog.name}</p>

  return (
    <div>
      <h1>Name: {dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={`Picture of ${dog.name}`} />
      <h3>Age: {dog.age}</h3>
      <p>Facts: {dog.facts.join(" ")}</p>
    </div>
  );
}

export default DogDetails;