import { useState } from "react";
import { useContent } from "../context/contentContext";

import EditModal from "./EditModal";

const ContentComponent = ({ title, content }) => {
  const [openEditModal, setEditModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { deleteContent } = useContent();

  const onEdit = (id, type) => {
    setModalContent({ id, type })
    setEditModal(true)
  }

  return (
    <section className="category__section">
      <h2 className="category__title">{title}</h2>
      <div className="category__content">
        {content?.map((item) => (
          <div key={item.id} className="content__card">
            <a href={item.video} target="_blank">
              <img src={item.image} alt="Card Image" />
            </a>
            <div className="card__actions">
              <button
                onClick={() => onEdit(item.id, item.type)}
              >
                Editar
              </button>
              <button onClick={() => deleteContent(item.type, item.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      {openEditModal && (
        <EditModal
          onOpenClose={setEditModal}
          id={modalContent.id}
          type={modalContent.type}
        />
      )}
    </section>
  );
};

export default ContentComponent;
