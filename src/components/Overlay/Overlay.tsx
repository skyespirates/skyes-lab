interface IOverlay {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Overlay = ({ isOpen, setIsOpen }: IOverlay) => {
  return (
    <section
      onClick={() => setIsOpen(!isOpen)}
      className={` ${
        isOpen
          ? "transition-all fixed top-0 left-0 w-[100%] h-[1000vh] bg-gray-600 z-10 opacity-70 translate-x-[288px]"
          : "translate-x-[0]"
      }`}
    ></section>
  );
};

export default Overlay;
