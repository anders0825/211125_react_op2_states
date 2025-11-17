/* JSX
CookieClicker
*/

import { useState } from "react";
import cookiePng from "../assets/images/cookie.png";

export default function CookieClicker(props) {
  // Javascript:
  const [count, setCount] = useState(0);

  function clickCookie() {
    setCount((prevNum) => prevNum + 1);
  }

  return (
    <>
      <section id="CookieClicker-cont" className="Component-cont">
        <h2>Cookie Clicker:</h2>
        <p id="score">{count}</p>
        <button onClick={clickCookie}>
          <img src={cookiePng} alt="Image of a Cookie" />
        </button>
        <p>I'm a cookie and I just love getting clicked...</p>
      </section>
    </>
  );
}

// "Animation" does not play on keydown...
// onKeyDown={(e) => {
//   if ((e.key = "Space")) {
//     clickCookie;
//   }
// }}
