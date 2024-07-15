import { useState } from "react";
import ContentComponent from "../components/ContentComponent";
import { useContent } from "../context/contentContext";

import CreateModal from "../components/CreateModal";

function App() {
  const {content} = useContent()
  const [createModalOpen, setCreateModalOpen] = useState(false)

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="navbar__actions">
            <p>AluraFlix</p>
            <button onClick={() => setCreateModalOpen(true)}>Create</button>
          </div>
        </nav>
        <div className="header__hero">
          <img src="/hero.jpg" alt="" />
        </div>
      </header>
      <main>
        <ContentComponent content={content.frontend} title="Frontend" />
        <ContentComponent content={content.backend} title="Backend" />
        {createModalOpen && <CreateModal onOpenClose={setCreateModalOpen} />}
      </main>
      <footer>
        <h4>AluraFlix</h4>
        <p>By: Alejandra (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
      </footer>
    </>
  );
}

export default App;
