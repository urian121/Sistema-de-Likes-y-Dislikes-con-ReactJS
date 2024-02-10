import { useEffect, useState } from "react";
import axios from "axios";

const Personas = () => {
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

  if (isLoading) {
    return <div className="text-center">Cargando Personas...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const like = () => {
    console.log("like");
  };

  const dislike = () => {
    console.log("dislike");
  };

  return (
    <>
      {data && (
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center titulo">
              Consumiendo una API desde ReactJS <hr />{" "}
            </h2>
          </div>
          {data.map((item) => (
            <div
              className="col-md-3 border py-4 px-4 media justify-content-center mb-4 pd-3"
              style={{
                background: "#f0f4f3 !important",
                textAlign: "center",
                marginRight: "10px", // Ajusta el valor según desees
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
              <p className="flex-content-btns">
                <i className="bi bi-emoji-heart-eyes" onClick={like}></i>
                <i className="bi bi-emoji-angry" onClick={dislike}></i>
              </p>
              <p className="flex-content-votos border">
                <span>1</span>
                <span>3</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Personas;
