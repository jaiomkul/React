import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { UsersList } from "./components/UserList";
import { UserData } from "./components/UserData";
import { Login } from "./components/Login";
import { PrivateComponent } from "./components/PrivateComponent";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/userslist" element={<UsersList />}></Route>
        <Route
          path="/users/:id"
          element={
            <PrivateComponent>
              <UserData />
            </PrivateComponent>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
