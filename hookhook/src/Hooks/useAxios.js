import defaultAxios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  //   if (!opts.url) {
  //     return;
  //   }

  const [trigger,setTrigger] = useState(0);

  const refetch = () => {
    setState({
        ...state,
        loading: true
    })
    setTrigger(Date.now())
  }
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState((prev) => ({
          ...state,
          loading: false,
          data,
        }));
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return {...state, refetch};
};
