import React from "react";
import { auth } from "../firebase";

const style = {
  button: `bg-slate-400 px-4 py-2 hover: bg-gray-200 rounded-full`,
};

const LogOut = () => {

  // eslint-disable-next-line no-unused-vars
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Logout
    </button>
  );
};

export default LogOut;
