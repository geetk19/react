// import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data:blogs, isLoading, error } = useFetch("http://localhost:8080/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs}/>}
    </div>
  );
};

export default Home;
