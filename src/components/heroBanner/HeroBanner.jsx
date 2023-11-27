import { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../lazyLoadImage/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";



const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home)
  const {data, loading} = useFetch("/movie/popular");

  useEffect(() => {
    const bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  },[data]);

  const searchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
        navigate(`search/${query}`)
    }
  };
  return (
    <section className="heroBanner_wrapper">
      {! loading && <div className="backdrop_img">
        <Img src={background} alt="bg-img" />
      </div> }
      <div className="opacity-layer"></div>
      <ContentWrapper className="wrapper">
        <div className="heroBanner_content">
          <h1 className="title">Welcome</h1>
          <p className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQuery}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default HeroBanner;
