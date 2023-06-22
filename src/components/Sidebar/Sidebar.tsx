import Link from "../Link/Link";
("react-router-dom");
import "./style.css";

type Navigation = {
  name: string;
  path: string;
}[];

const routes: Navigation = [
  { name: "Home", path: "/" },
  { name: "Todo", path: "/todo" },
  { name: "Counter", path: "/counter" },
  { name: "Animation", path: "/animation" },
  { name: "Letters", path: "/letters" },
  { name: "Spring", path: "/spring" },
  { name: "Query", path: "/query" },
  { name: "Hero", path: "/hero" },
  { name: "Background", path: "/background" },
  { name: "Form", path: "/form" },
];

interface ISidebar {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: ISidebar) => {
  return (
    <div
      className={`sidebar flex flex-col gap-y-4 fixed opacity-100 transition-all z-10 bg-white top-0 left-0  h-full w-72 shadow-[0_5px_10px_rgba(0,0,0,0.1)] ${
        isOpen ? "translate-x-[0px]" : "translate-x-[-288px]"
      }`}
    >
      <div className="logo bg-sky-500 text-white px-12 py-4 text-xl w-full flex items-center gap-6">
        <i
          onClick={() => setIsOpen(!isOpen)}
          className="ri-menu-fill cursor-pointer hover:bg-sky-600 w-7 h-7 rounded-full flex justify-center items-center"
        ></i>{" "}
        <span>Sykee</span>
      </div>
      <div className="sidebar-content px-3">
        <ul className="flex flex-col">
          {routes.map((route) => (
            <Link
              key={route.name}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              name={route.name}
              path={route.path}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

/*
<li>
            <NavLink
              onClick={() => setIsOpen(!isOpen)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-white bg-sky-400" : "text-gray-500"
                } flex items-center gap-4 py-3 px-12 rounded-lg  hover:bg-sky-400 hover:text-white`
              }
              to="/"
            >
              <i className="ri-home-5-line text-xl"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(!isOpen)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-white bg-sky-400" : "text-gray-500"
                } flex items-center gap-4 py-3 px-12 rounded-lg  hover:bg-sky-400 hover:text-white`
              }
              to="/todo"
            >
              <i className="ri-list-check-3 text-xl"></i>
              <span>Todo</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(!isOpen)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-white bg-sky-400" : "text-gray-500"
                } flex items-center gap-4 py-3 px-12 rounded-lg  hover:bg-sky-400 hover:text-white`
              }
              to="/counter"
            >
              <i className="ri-increase-decrease-line text-xl"></i>
              <span>Counter</span>
            </NavLink>
          </li>
*/
