import { useContent } from "../context/contentContext";

const CreateModal = ({ onOpenClose }) => {
  const { addContent } = useContent();

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    addContent(data.get("category"), {
      image: data.get("image"),
      type: data.get("category"),
      id: Date.now(),
      title: data.get("title"),
      video: data.get("video"),
      description: data.get("description"),
    });

    alert('Contenido agregado')
    onOpenClose(false)
  };

  return (
    <div className="modal">
      <span onClick={() => onOpenClose(false)}>X</span>
      <div className="modalBody">
        <h2>Agregar contenido</h2>
        <form onSubmit={onSubmit} action="#">
          <div className="formInputs">
            <label htmlFor="title">Titulo</label>
            <input type="text" required name="title" placeholder="Titulo" />
          </div>
          <div className="formInputs">
            <label htmlFor="category">Category</label>

            <select required name="category" id="">
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
          </div>
          <div className="formInputs">
            <label htmlFor="image">Imagen</label>
            <input
              required
              type="text"
              name="image"
              placeholder="Url de la imagen"
            />
          </div>
          <div className="formInputs">
            <label htmlFor="video">Video</label>
            <input
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

export default CreateModal;
