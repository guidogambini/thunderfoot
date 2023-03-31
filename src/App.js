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

  return (
    <main className="App">
      {Object.keys(appData).length > 0 && (
        <>
          <Navbar logo={appData.navbar.logo} menu={appData.navbar.menu} />
          <Hero
            title={appData.hero.title}
            subtitle={appData.hero.subtitle}
            buttonLabel={appData.hero.button_label}
            buttonLink={appData.hero.button_link}
          />
          <CardsList />
        </>
      )}
    </main>
  );
};

export default App;
