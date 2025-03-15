import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/Todo/TodoList";
import "./scss/libs/_normalize.scss";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="container">
            <Header />
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
