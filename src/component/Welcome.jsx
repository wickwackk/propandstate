import { useState } from "react";
import "../style/welcome.css";

export default function WelcomePage(prop) {
  const { setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => setLogin(userName, password)}>Login</button>
    </div>
  );
}
