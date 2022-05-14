import React from "react";
import "./App.css";
import Cards from "./Cards";
import requests from "./requests";
import Hero from "./components/hero/Hero";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Cards
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeCards
      />
      <Cards title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Cards title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Cards title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Cards title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Cards title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Cards title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Cards title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
