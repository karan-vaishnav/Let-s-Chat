import { query, orderBy, collection, onSnapshot} from "firebase/firestore";
import SendMessage from "./SendMessage";
import React, { useState, useEffect, useRef } from "react";
import {db} from '../firebase'
import Message from "./Message";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsunscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsunscribe();
  }, []);

  return (
    <>
      <main className={style.main}>

        {messages && 
            messages.map((message) => (
            <Message key={message.id} message={message} />
        ))}
      </main>

      <SendMessage scroll={scroll}/>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
