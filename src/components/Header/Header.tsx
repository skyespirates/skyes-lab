import "./style.css";

interface IHeader {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Header = ({ isOpen, setIsOpen }: IHeader) => {
  return (
    <div className="bg-sky-500 text-white px-12 py-4 text-xl fixed top-0 left-0 w-full flex items-center gap-6">
      <i
        onClick={() => setIsOpen(!isOpen)}
        className="ri-menu-fill cursor-pointer hover:bg-sky-600 w-7 h-7 rounded-full flex justify-center items-center"
      ></i>{" "}
      <span>Sykee</span>
    </div>
  );
};

export default Header;
