import { useEffect } from "react";
import { fetchDataFromAPi } from "./utils/api";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchDataFromAPi("/discover/movie").then((res) => console.log(res));
  };
  return <div className="app">App Testing</div>;
}

export default App;
