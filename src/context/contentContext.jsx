import { createContext, useState, useContext } from "react";

const ContentContext = createContext({});

const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({
    frontend: [
      {
        image: "cardImage.png",
        type: "frontend",
        id: 1,
        title: "My title",
        video: 'https://www.youtube.com/watch?v=_ITiwPMUzho',
        description: "My description",
      },
    ],
    backend: [
      {
        image: "backendImage.png",
        type: "backend",
        id: 2,
        title: "My title",
        video: 'https://www.youtube.com/watch?v=_ITiwPMUzho',
        description: "My description",
      },
    ],
  });

  const addContent = (category, data) => {
    let newContent = { ...content };
    if (category === "frontend") {
      const frontend = newContent.frontend;
      newContent = {
        ...newContent,
        frontend: [...frontend, data],
      };
    }

    if (category === "backend") {
      newContent = {
        ...newContent,
        backend: [...newContent["backend"], data],
      };
    }

    setContent(newContent);
  };

  const deleteContent = (category, id) => {
    let newContent = { ...content };

    if (category === "frontend") {
      const frontend = newContent.frontend.filter((item) => item.id !== id);
      newContent = {
        ...newContent,
        frontend: [...frontend],
      };
    }

    if (category === "backend") {
      const backend = newContent.backend.filter((item) => item.id !== id);
      newContent = {
        ...newContent,
        backend: [...backend],
      };
    }

    setContent(newContent);
  };

  const findContent = (category, id) => {
    return content[category].find((item) => item.id === id);
  };

  const updateContent = (category, id, changes) => {
    let newContent = { ...content };
    const updatedContent = newContent[category].map(item => {
      if(item.id === id) {
        return changes
      }

      return item
    })
    
    if (category === "frontend") {
      newContent = {
        ...newContent,
        frontend: [...updatedContent],
      };
    }

    if (category === "backend") {
      newContent = {
        ...newContent,
        backend: [...updatedContent],
      };
    }


    setContent(newContent);
  }

  const initialValue = {
    content,
    addContent,
    deleteContent,
    findContent,
    updateContent
  };

  return (
    <ContentContext.Provider value={initialValue}>
      {children}
    </ContentContext.Provider>
  );
};

const useContent = () => {
  const content = useContext(ContentContext);
  return content;
};

export { ContentProvider, useContent };
