import { createContext, useCallback, useEffect } from "react";

const AppContext = createContext();

const Provider = ({ children }) => {
  const [appData, setAppData] = useState({});

  useEffect(() => {
    getAppData();
  }, [getAppData]);

  const getAppData = useCallback(() => {
    fetch("https://tf-frontend.netlify.app/trial")
      .then((response) => response.json())
      .then((data) => setAppData(data))
      .catch((error) => console.log(error));
  }, []);

  const contextData = {
    navbarData: appData.navbar,
    heroData: appData.hero,
    postsData: appData.body,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};

export { AppContext };
export default Provider;
