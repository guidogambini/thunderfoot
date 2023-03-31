import { createContext, useCallback, useEffect, useState } from "react";

const AppContext = createContext();

const Provider = ({ children }) => {
  const [appData, setAppData] = useState({});

  const getAppData = useCallback(() => {
    fetch("https://tf-frontend.netlify.app/trial")
      .then((response) => response.json())
      .then((data) => setAppData(data));
  }, []);

  useEffect(() => {
    getAppData();
  }, [getAppData]);

  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};

export { AppContext };
export default Provider;
