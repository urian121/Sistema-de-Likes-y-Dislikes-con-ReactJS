import { useEffect, useState } from "react";
import axios from "axios";
import ListaPersonas from "./ListaPersonas";

const PersonasContainer = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return <ListaPersonas data={data} isLoading={isLoading} error={error} />;
};

export default PersonasContainer;
