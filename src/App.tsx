import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Overlay from "./components/Overlay/Overlay";
import Container from "./components/Container/Container";
import { useState } from "react";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="wrapper relative bg-blue-50">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
