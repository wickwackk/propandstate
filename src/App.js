import { useState } from "react";
import "./App.css";
import Profile from "./component/Profile";
import Welcome from "./component/Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userlists = [
    { username: "andy", password: "asd" },
    { username: "jamie", password: "asd" },
    { username: "muugii", password: "asd" },
    { username: "orgil", password: "shibata" },
  ];

  function loginHandler(userName, password) {
    let found = false;
    userlists.forEach((userlist) => {
      if (userName === userlist.username && password === userlist.password) {
        found = true;
      }
    });
    if (found == true) {
      setIsLoggedIn(true);
    } else {
      console.error("Wrong password or username");
    }
  }
  return (
    <div>
      <div className="App">
        {isLoggedIn ? (
          <Profile setLogout={setIsLoggedIn} />
        ) : (
          <Welcome setLogin={loginHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
