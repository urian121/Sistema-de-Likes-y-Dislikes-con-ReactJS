import PropTypes from "prop-types";
import { useState } from "react";

const PersonaItem = ({ persona }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const like = () => {
    setLikeCount(likeCount + 1);
  };

  const dislike = () => {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
      setDislikeCount(dislikeCount + 1);
    }
  };

  return (
    <div
      className="col-md-3 py-4 px-4 media justify-content-center mb-4"
      style={{
        background: "#f0f4f3 !important",
        textAlign: "center",
        marginRight: "10px",
      }}>
      <img
        src={persona.avatar}
        className="mr-3"
        alt="perfil"
        style={{ display: "inline-block", width: "170px" }}
      />
      <h4 className="mt-2">
        {persona.first_name} {persona.last_name}
      </h4>
      <p style={{ display: "flex", justifyContent: "space-around" }}>
        <i className="bi bi-emoji-heart-eyes" onClick={like}></i>
        <i className="bi bi-emoji-angry" onClick={dislike}></i>
      </p>
      <p
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}>
        <span style={{ color: "green" }}>{likeCount}</span>
        <span style={{ color: "red" }}>{dislikeCount}</span>
      </p>
    </div>
  );
};
/**
 * PersonaItem.propTypes = {...} Es una forma de definir y validar las propiedades que se esperan recibir en el componente PersonaItem.
 * PersonaItem.propTypes está definiendo que el componente PersonaItem espera recibir una propiedad llamada persona que debe ser un objeto y que es requerido (required). Si no se proporciona esta propiedad o si no es un objeto, se generará un error de validación.
 */
PersonaItem.propTypes = {
  persona: PropTypes.object.isRequired,
};

const ListaPersonas = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div className="text-center">Cargando Personas...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="text-center titulo">
            Sistema de Likes y Dislikes con ReactJS <hr />
          </h2>
        </div>
        {data &&
          data.map((item) => <PersonaItem key={item.id} persona={item} />)}
      </div>
    </>
  );
};

ListaPersonas.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default ListaPersonas;
