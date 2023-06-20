import { useState } from "react";
import { motion } from "framer-motion";

const Animation = () => {
  const [move, setMove] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="h-screen bg-slate-100 relative flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.8, borderRadius: "100%", rotate: 90 }}
          className="w-36 h-36 bg-violet-400"
        ></motion.div>
      </div>
      <div className="h-screen bg-slate-200 flex justify-center items-center">
        <motion.div
          animate={{ x: move ? "100px" : "-100px" }}
          transition={{ duration: 0 }}
          onClick={() => setMove(!move)}
          className="w-36 h-36 bg-sky-400 rounded-full hover:bg-violet-400 transition ease-in-out duration-300 cursor-pointer"
        ></motion.div>
      </div>
      <div className="h-screen bg-slate-300 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: "-300px" }}
          whileInView={{ opacity: 1, x: "-100px" }}
          transition={{ type: "Inertia", ease: "easeIn", duration: 0.6 }}
          className="w-36 h-36 bg-green-400 rounded-xl hover:bg-red-400 transition ease-in-out duration-300 cursor-pointer"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: "300px" }}
          whileInView={{ opacity: 1, x: "100px" }}
          transition={{ type: "Inertia", ease: "easeIn", duration: 0.6 }}
          className="w-36 h-36 bg-yellow-400 rounded-xl hover:bg-purple-400 transition ease-in-out duration-300 cursor-pointer"
        ></motion.div>
      </div>
      <div className="h-screen bg-slate-400 flex justify-center items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-24 h-24 bg-red-500 rounded-xl"
        ></motion.div>
      </div>
      <div className="h-screen bg-slate-500 flex justify-center items-center gap-4">
        <motion.div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
            <Child key={i} delay={0.2 * i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Animation;
type ChildProps = {
  delay: number;
};
const Child = ({ delay }: ChildProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      className="w-36 h-36 bg-yellow-400 rounded-xl"
    ></motion.div>
  );
};
