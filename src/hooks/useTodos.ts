import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Data {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useGetTodo = (id: number) =>
  useQuery({
    queryKey: ["mytodo", id],
    queryFn: async () => {
      const { data } = await axios.get(import.meta.env.VITE_API_URL + "/" + id);
      return data as Data;
    },
    retry: 1,
  });
