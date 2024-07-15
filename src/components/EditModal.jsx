import { useContent } from "../context/contentContext";

const EditModal = ({ onOpenClose, id, type }) => {
  const { updateContent, findContent } = useContent();

  const content = findContent(type, id);

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    updateContent(data.get("category"), content.id, {
      image: data.get("image"),
      type: data.get("category"),
      title: data.get("title"),
      video: data.get("video"),
      description: data.get("description"),
    });

    alert("Contenido editado");
    onOpenClose(false);
  };

  return (
    <div className="modal">
      <span onClick={() => onOpenClose(false)}>X</span>
      <div className="modalBody">
        <h2 style={{ textAlign: "center" }}>Editar Contenido</h2>
        <form onSubmit={onSubmit} action="#">
          <div className="formInputs">
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              defaultValue={content.title}
              required
              name="title"
              placeholder="Titulo"
            />
          </div>
          <div className="formInputs">
            <label htmlFor="category">Category</label>

            <select required name="category" id="">
              <option selected={content.type === "frotend"} value="frontend">
                Frontend
              </option>
              <option selected={content.type === "backend"} value="backend">
                Backend
              </option>
            </select>
          </div>
          <div className="formInputs">
            <label htmlFor="image">Imagen</label>
            <input
              required
              defaultValue={content.image}
              type="text"
              name="image"
              placeholder="Url de la imagen"
            />
          </div>
          <div className="formInputs">
            <label htmlFor="video">Video</label>
            <input
              defaultValue={content.video}
              required
              type="text"
              name="video"
              placeholder="Url del video"
            />
          </div>
          <div className="formInputs">
            <label htmlFor="description">Descripcion</label>
            <textarea
              required
              defaultValue={content.description}
              type="text"
              name="description"
              placeholder="Url de la imagen"
            />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
