import { useState, useEffect } from "react"
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { auth, db } from "../firebase-config"
import '../styles/Chat.css'

export const Chat = (props) => {

  const { room } = props

  const [newMessage, setNewMessage] = useState("")

  const messagesRef = collection(db, "messages");

  const [messages, setMessages] = useState([])

  useEffect(() => {
    //the condition of new messages being added to the room we're in
    //! you must add an index in firebase site if you want to query for "room" but order by
    //! some other variable
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"))
    //runs every time the is a change
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {

      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })
    //! this line is used to "cleanup" the useEffect function
    //! it is imperative that you don't forget this practice while working with databases
    return () => unsubscribe();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
    });

    setNewMessage("")
  }

  return (
    <div className="chat-app"> 
    <div className="header">
      <h1>Welcome to {room}</h1>
    </div>
    <div className="messages">
      {messages.map((message) => (
        <div className="message" key ={message.id}>
          <span className="user">{message.user}:</span>
          {message.text}
        </div>
      ))}
    </div>
    <form onSubmit={handleSubmit} className="new-message-form">
      <input className="new-message-input" placeholder="enter your message" 
        onChange={(e) => setNewMessage(e.target.value)}
        value = { newMessage }
      />
      <button type = "submit" className="send-button"> Send yo message </button>
    </form>
  </div>
  )
}