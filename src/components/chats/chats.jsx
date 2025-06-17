import "./chats.css";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [Text, setText] = useState("");
  const handleEmoji = (emojiObject) => {
    setText((prev) => prev + emojiObject.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet. </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quaerat earum adipisci nisi rerum. Facilis, consequuntur dolorum?
              Illo assumenda rerum quo reiciendis in! Odio, modi reiciendis.
              Perspiciatis inventore eaque maiores.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quaerat earum adipisci nisi rerum. Facilis, consequuntur dolorum?
              Illo assumenda rerum quo reiciendis in! Odio, modi reiciendis.
              Perspiciatis inventore eaque maiores.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quaerat earum adipisci nisi rerum. Facilis, consequuntur dolorum?
              Illo assumenda rerum quo reiciendis in! Odio, modi reiciendis.
              Perspiciatis inventore eaque maiores.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quaerat earum adipisci nisi rerum. Facilis, consequuntur dolorum?
              Illo assumenda rerum quo reiciendis in! Odio, modi reiciendis.
              Perspiciatis inventore eaque maiores.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="Picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
