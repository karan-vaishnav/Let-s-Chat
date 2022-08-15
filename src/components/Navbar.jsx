import React from "react";
import SignIn from "./SignIn";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "./LogOut";

const style = {
  nav: `bg-slate-900 h-20 flex justify-between items-center p-4`,
  heading: `text-slate-400 text-3xl `,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Let's Chat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
