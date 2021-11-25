import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Cargando...");
    setData(null);
    setError(null);

    const source = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((response) => {
        setData(response.data);
        setLoading(null);
      })
      .catch((error) => {
        setError(error);
        setLoading(null);
      });

      return () => {
        source.cancel();
      }

  }, [url]);

  return { data, loading, error };
}

export default useFetch;
