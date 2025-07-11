import { useState, useRef, useEffect } from "react";
import "./chatList.css";
import { useUserStore } from "../../../lib/userStore";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../../lib/firebase"; // Adjust the path as needed

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  const chatListRef = useRef(null);
  let scrollTimeout = null;

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promisses = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  console.log("Chats:", chats);

  useEffect(() => {
    const el = chatListRef.current;
    if (!el) return;

    const handleScroll = () => {
      el.classList.add("scrolling");
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        el.classList.remove("scrolling");
      }, 1000);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="chatList" ref={chatListRef}>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>

        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {chats.map((chat, idx) => (
        <div className="item" key={chat.id || idx}>
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>{chat.lastMessange}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
