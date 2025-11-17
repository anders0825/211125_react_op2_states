/* JSX
App.jsx
*/

// react_modules:
import { useState } from "react";

// myComponents:
import CookieClicker from "./Components/CookieClicker.jsx";
import Users from "./Components/Users.jsx";
import CatFacts from "./Components/CatFacts.jsx";

function App() {
  // JavaScript:

  const foobar = {
    id: "80082",
    name: "Foo",
    lastName: "Bar",
    birthDate: new Date(1930, 0, 1),
    title: "crook",
    lvl: 1,
  };
  const fisk = {
    id: "02496",
    name: "fisk",
    lastName: "Doe",
    birthDate: new Date(-1, 0, 1),
    title: "Mafia Boss",
    lvl: 100,
  };

  return (
    <>
      <h1>React op2: States</h1>
      <CookieClicker />
      <Users />
      <CatFacts />
    </>
  );
}

export default App;
