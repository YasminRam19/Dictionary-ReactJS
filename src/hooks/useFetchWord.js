import { useEffect, useState } from "react";
import getWordService from "../services/getWordService";

const useFetchWord = (word) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setState({
      data: [],
      loading: true,
    });

    getWordService(word).then((result) => {
      console.log(result);

      setState({
        data: result,
        loading: false,
      });
    });
  }, [word]);

  return state;
};

export default useFetchWord;
