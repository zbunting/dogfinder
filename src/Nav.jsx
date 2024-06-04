import { NavLink } from "react-router-dom";

/** Nav component
 *
 * Props:
 * dogNames: array of dog names
 *
 * State:
 * None
 *
 * App -> Nav
 *
*/
function Nav({ dogNames }) {

  const activeStyle = {
    color: "black",
    textDecoration: "none"
  };

  //TODO: put CSS in its own file
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={'/dogs'}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        {dogNames.map(dogName => (
          <li key={dogName}>
            <NavLink to={`/dogs/${dogName}`}
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              {dogName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;