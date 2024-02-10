import PropTypes from "prop-types";
import { useLocalStorage } from "react-use";

const PersonaItem = ({ persona, index }) => {
  const [likes, setLikes] = useLocalStorage(`likes_${index}`, 0);
  const [dislikes, setDislikes] = useLocalStorage(`dislikes_${index}`, 0);

  const like = () => {
    setLikes(likes + 1);
  };

  const dislike = () => {
    if (likes > 0) {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
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
      <p style={{ display: "flex", justifyContent: "space-around" }}>
        <span style={{ color: "green" }}>{likes}</span>
        <span style={{ color: "red" }}>{dislikes}</span>
      </p>
    </div>
  );
};

PersonaItem.propTypes = {
  persona: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
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
          data.map((item, index) => (
            <PersonaItem key={item.id} persona={item} index={index} />
          ))}
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
