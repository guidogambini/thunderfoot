import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CardsList from "./components/CardsList/CardsList";

const App = () => {
  const [appData, setAppData] = useState({});

  const getAppData = () => {
    fetch("https://tf-frontend.netlify.app/trial")
      .then((response) => response.json())
      .then((data) => setAppData(data));
  };

  useEffect(() => {
    getAppData();
  }, []);

  const { navbar, hero, body } = appData;

  return (
    <main className="App">
      {Object.keys(appData).length > 0 && (
        <>
          <Navbar logo={navbar.logo} menu={navbar.menu} />
          <Hero
            title={hero.title}
            subtitle={hero.subtitle}
            image={hero.bg_image}
            buttonLabel={hero.button_label}
            buttonLink={hero.button_link}
          />
          <CardsList
            title={body.title}
            list={body.posts}
            buttonLabel={body.button_label}
            buttonLink={body.button_link}
          />
        </>
      )}
    </main>
  );
};

export default App;
