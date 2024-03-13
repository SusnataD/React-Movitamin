import { useEffect } from "react";
import { fetchDataFromAPi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResults";
import PageNotFound from "./pages/404/PageNotFound";
import Headers from "./components/header/Header";
import Footers from "./components/footer/Footer";

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

  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

export default App;
