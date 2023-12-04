import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import Navbar from "./components/Navbar";
import UserDetail from "./components/Users/UserDetail";
import Home from "./components/Home";
import CreateUser from "./components/Users/CreateUser";
import EditUser from "./components/Users/EditUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/1" element={<UserDetail />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="edit-user" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
