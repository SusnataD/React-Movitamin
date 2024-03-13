import { useEffect } from "react";
import { fetchDataFromAPi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const url = useSelector((state) => state.home.url);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchDataFromAPi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return <div className="app">App Testing {url.total_pages}</div>;
}

export default App;
