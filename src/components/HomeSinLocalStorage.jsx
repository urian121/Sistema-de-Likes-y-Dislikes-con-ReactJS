import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  // Estado para los datos de la API
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estado para los likes y dislikes
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  // Consulta de la API al montar el componente
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

  // Función para manejar el like de una persona
  const manejarLike = (id) => {
    const updatedLikes = { ...likes };
    updatedLikes[id] = (updatedLikes[id] || 0) + 1;
    setLikes(updatedLikes);
  };

  // Función para manejar el dislike de una persona
  const manejarDislike = (id) => {
    const updatedDislikes = { ...dislikes };
    updatedDislikes[id] = (updatedDislikes[id] || 0) + 1;
    setDislikes(updatedDislikes);
  };

  if (isLoading) {
    return <div className="text-center">Cargando Personas...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="row justify-content-center">
      {data &&
        data.map((item) => (
          <div
            className="col-md-3 border py-4 px-4 media justify-content-center mb-4 pd-3"
            style={{
              background: "#f0f4f3 !important",
              textAlign: "center",
              marginRight: "10px",
            }}
            key={item.id}>
            <img
              src={item.avatar}
              className="mr-3 latidos-animation"
              alt="perfil"
              style={{ display: "inline-block" }}
            />
            <h4 className="mt-2">
              {item.first_name} {item.last_name}
            </h4>
            <p style={{ display: "flex", justifyContent: "space-around" }}>
              <i
                className="bi bi-emoji-heart-eyes"
                onClick={() => manejarLike(item.id)}></i>
              <i
                className="bi bi-emoji-angry"
                onClick={() => manejarDislike(item.id)}></i>
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}>
              <span style={{ color: "green" }}>{likes[item.id] || 0}</span>
              <span style={{ color: "red" }}>{dislikes[item.id] || 0}</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Home;
