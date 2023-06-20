import { useEffect, useState, useCallback } from "react";
import axios from "axios";

type Data = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

export const useFetchChain = (url: string): Data => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        return response.json();
      })
      .then((data) => {
        setIsError(false);
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        if (error instanceof Error) {
          throw new Error("Something went wrong!");
        }
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export const useFetchAsync = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsLoading(false);
          setIsError(true);
        }
        const data = await response.json();
        setIsLoading(false);
        setIsError(false);
        setData(data);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        if (error instanceof Error) {
          throw new Error("Something went wrong!");
        }
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
    isLoading,
    isError,
  };
};

export const useAxiosChain = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.status !== 200) {
          setIsLoading(false);
          setIsError(true);
          throw new Error("Something went wrong!");
        }
        setIsLoading(false);
        setIsError(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        if (error instanceof Error) {
          throw new Error();
        }
      });
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export const useAxiosAsync = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.status !== 200) {
          setIsLoading(false);
          setIsError(true);
          throw new Error("Something went wrong!");
        }
        setIsLoading(false);
        setIsError(false);
        setData(response.data);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        if (error instanceof Error) {
          throw new Error("Something went wrong!");
        }
      }
    };

    fetchData();
  }, [url]);
  return { data, isLoading, isError };
};
