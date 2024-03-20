import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import "./Movie.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const formatCurrencyBr = (number) => {
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">"{movie.tagline}"</p>
          <div className="info-orcamento">
            <div className="info">
              <h3 role="img">
                <BsWallet2 /> Orçamento (dólar americano):
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3 role="img">
                <BsWallet2 /> Orçamento (em real):
              </h3>
              <p>{formatCurrencyBr(movie.budget * 5)}</p>
            </div>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Faturamento:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info info-description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>"{movie.overview}"</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
