import { decrement, increment, CounterState } from "../../slices/counterSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Toolkit = () => {
  const value = useSelector<CounterState, number>((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center">
      <div>
        <ul className="p-14 border-2 rounded-md flex items-center gap-4">
          <li>
            <button
              onClick={() => dispatch(decrement())}
              className="h-9 w-9 font-semibold rounded-md bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>
          </li>
          <li>{value}</li>
          <li>
            <button
              onClick={() => dispatch(increment())}
              className="h-9 w-9 font-semibold rounded-md bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toolkit;
