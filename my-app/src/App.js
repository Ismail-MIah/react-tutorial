import "./App.css";
import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);
  const getAllUsers = () => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="App">
      <h1>User Managment App</h1>
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
      <section>
        {users &&
          users.map((user) => {
            const { id, username, email } = user;
            return (
              <article className="card" key={id}>
                <p>{username}</p>
                <p>{email}</p>
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default App;
