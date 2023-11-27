import { useState , useEffect } from "react"
import { Outlet } from "react-router-dom"
import { fetchDataFromApi } from "./utils/api"
import { useDispatch, useSelector } from "react-redux"
import { getApiConfiguration, getGenres } from "./features/homeSlice"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
  const fetchApiConfig = () => fetchDataFromApi('/configuration').then((res) => {
    // console.log(res);
    const url = {
      backdrop: res.images.secure_base_url + "original",
      poster: res.images.secure_base_url + "original",
      profile: res.images.secure_base_url + "original",
    }
    dispatch(getApiConfiguration(url));
  })

  const genresCall = async () => {
    let promise = [];
    let endPoints = ["movie", "tv"];
    let allGenres = {};
    
    endPoints.forEach((url) => {
      promise.push(fetchDataFromApi(`/genre/${url}/list`))
    });
    
    const data = await Promise.all(promise);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
    // console.log(data);
  }

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  },[]);

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
