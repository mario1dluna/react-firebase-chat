import Chat from "./components/chats/chats";
import List from "./components/list/list";
import Detail from "./components/detail/Detail";

const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default App;