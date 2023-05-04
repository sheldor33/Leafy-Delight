import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import {useRouter} from "next/router"
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter()
  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        username,
        password, 
      });
      console.log("REDIRECTING AFTER LOGIN",res);
      router.push("/admin")
    } catch (err) {
      console.log("ERROR", err);
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Admin Dashboard</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
