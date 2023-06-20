import { NavLink } from "react-router-dom";
import { RiEmotionHappyLine } from "react-icons/ri";

interface ILink {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
  name: string;
  path: string;
}

const Link = ({ isOpen, setIsOpen, name, path }: ILink) => {
  return (
    <li>
      <NavLink
        onClick={() => setIsOpen(!isOpen)}
        className={({ isActive }) =>
          `${
            isActive
              ? "text-white bg-sky-400 hover:bg-sky-500"
              : "text-gray-500 hover:bg-gray-100"
          } flex items-center gap-4 py-3 px-12 rounded-lg transition ease-in-out duration-300`
        }
        to={path}
      >
        <RiEmotionHappyLine className="text-xl" />
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

export default Link;
