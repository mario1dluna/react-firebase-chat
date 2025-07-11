import { auth } from "../../lib/firebase";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="User avatar" />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit amete varius molestie</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="Toggle settings" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="Toggle privacy" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="Toggle photos" />
          </div>

          <div className="photos">
            {[1, 2, 3, 4].map((_, i) => (
              <div className="photoItem" key={i}>
                <div className="photoDetail">
                  <img
                    src="https://images.unsplash.com/photo-1482287068671-7fb7325e1a8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="imagen bonita"
                  />
                  <span>Photo_2024_2.png</span>
                </div>
                <img src="./download.png" alt="Download" className="icon" />
              </div>
            ))}
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="Toggle files" />
          </div>
        </div>

        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
