import React, { useState, useEffect } from "react";
import "./App.css";

const URL = "https://rest-api-without-db.herokuapp.com/users";

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
        setUsers(data.users);
      })
      .catch((err) => {
        setError(error.message);
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
      {isLoading && <h2> Loading ....</h2>}
      {error && <h2>{error}</h2>}

      <section>
        {users &&
          users.map((user) => {
            const { id, username, email } = user;
            return (
              <article key={id} className="card">
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
