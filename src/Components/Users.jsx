/* JSX
Users
*/
import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function Users() {
  const [users, setUsers] = useState(mockData);

  const [newuser, setNewuser] = useState({
    username: "",
    email: "",
  });

  function addUser(e) {
    // prevent webiste reload on submit
    e.preventDefault();

    // if input empty => return
    if (!newuser.username || !newuser.email) return;

    // ...users (copy all existing data), newuser (add newuser)
    setUsers([...users, newuser]);

    // clear input fields
    setNewuser({ username: "", email: "" });
  }

  function handleInput(e) {
    const { name, value } = e.target;

    setNewuser({
      ...newuser,
      [name]: value,
    });
  }

  return (
    <section id="Users-cont" className="Component-cont">
      <h2>Users:</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            <p className="username">{user.username}</p>
            <p className="email">- {user.email}</p>
          </li>
        ))}
      </ul>
      <h3>Add new User:</h3>
      <form onSubmit={addUser}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="Username ..."
            value={newuser.username}
            onChange={handleInput}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email ..."
            value={newuser.email}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </section>
  );
}
