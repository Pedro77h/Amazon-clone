import React, { useState } from "react";
import * as S from "./styles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const router = useRouter();

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      router.push("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <S.Container>
      <h1>Sign In</h1>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Passowrd</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <S.Button signIn onClick={loginUser}>
        Sign In
      </S.Button>
      <p style={{ textAlign: "center" }}>Or</p>
      <S.Button onClick={registerUser}>Create Your Amazon Account</S.Button>
    </S.Container>
  );
};
