import { NavLink } from "react-router-dom";


function Nav({ dogNames }) {

  const activeStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <nav>
      <ul>
        {dogNames.map(dogName => (
          <li>
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