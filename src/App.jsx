import Chat from "./components/chats/chats";
import List from "./components/list/list";
import Detail from "./components/detail/Detail";
import Login from "./components/login/login";
import Notification from "./components/notification/notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { collectionGroup } from "firebase/firestore";
import { useUserStore } from "./lib/userStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List user={currentUser} />
          <Chat user={currentUser} />
          <Detail user={currentUser} />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
