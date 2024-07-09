import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import movies from "../top250.json";
import { AppContext } from "../context/AppContext";
import {
  setLike,
  setWish,
  addToWishTable,
  removeFromWishTable,
  addToLikeTable,
  removeFromLikeTable,
} from "../store.js";

const Movie = () => {
  const movie_title = useParams().title;
  console.log(movie_title);
  const movie = movies.find((movie) => movie.title.toString() === movie_title);
  const dispatch = useDispatch();
  // const { like, wish, likeTable, wishTable } = useSelector(
  //   (state) => state.app
  // );
  // const { like, setLike } = useContext(AppContext);
  // const { wish, setWish } = useContext(AppContext);
  // const { likeTable, setLikeTable } = useContext(AppContext);
  // const { wishTable, setWishTable } = useContext(AppContext);
  const [movieList, setMovieList] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const wishTable = useSelector((state) => state.app.wishTable);
  const likeTable = useSelector((state) => state.app.likeTable);

  // const handleLike = () => {
  //   if (like === "Like") {
  //     dispatch(setLike("Liked"));
  //     dispatch(
  //       setLikeTable((prevLikeTable) => [...prevLikeTable, movie.title])
  //     );
  //   } else {
  //     dispatch(setLike("Like"));
  //     dispatch(
  //       setLikeTable((prevLikeTable) =>
  //         prevLikeTable.filter((item) => item !== movie.title)
  //       )
  //     );
  //   }
  // };

  // const handleWish = () => {
  //   if (wish === "Wishlist") {
  //     dispatch(setWish("Wishlisted"));
  //     dispatch(
  //       setWishTable((prevWishTable) => [...prevWishTable, movie.title])
  //     );
  //   } else {
  //     dispatch(setWish("Wishlist"));
  //     dispatch(
  //       setWishTable((prevWishTable) =>
  //         prevWishTable.filter((item) => item !== movie.title)
  //       )
  //     );
  //   }
  // };

  const handleLike = () => {
    if (likeTable.includes(movie.title)) {
      dispatch(removeFromLikeTable(movie.title));
    } else {
      dispatch(addToLikeTable(movie.title));
    }
  };

  const handleWish = () => {
    if (wishTable.includes(movie.title)) {
      dispatch(removeFromWishTable(movie.title));
    } else {
      dispatch(addToWishTable(movie.title));
    }
  };

  useEffect(() => {
    const fetchAndSetMovies = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:5000/api/get_rec?movie=${movie.title.toString()}`
        );
        const data = await res.json();
        setRecommendations(data.recommendations);

        const recommendedMovies = movies.filter((m) =>
          data.recommendations.includes(m.title)
        );
        setMovieList(recommendedMovies);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    if (movie) {
      fetchAndSetMovies();
    }
  }, [movie]);

  return (
    <div className="container mt-10">
      {movie ? (
        <>
          <div className="p-10">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={movie.URL}
              alt={movie.title}
              className="w-2/6 rounded mb-4 pl-10"
            />
            <div className="text-lg p-10">
              <p>{movie.summary}</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat libero optio odit, hic aliquid quasi autem ea tempore
                fugiat sunt ratione officia ipsa molestiae itaque aliquam eos
                cumque culpa similique ullam totam. Enim, saepe mollitia sit
                aliquid sint reiciendis delectus ipsum corrupti ducimus
                laudantium itaque molestiae, unde eius optio laborum.
              </p>
              <br />
              <p>
                <b>Director:</b> {movie.director}
              </p>
              <br />
              <p>
                <b>Genre:</b> {movie.genre}
              </p>
            </div>
          </div>
          <div className="ml-10">
            <button className="pr-1" onClick={handleWish}>
              {wishTable.includes(movie.title) ? "Wishlisted" : "Wishlist"}
            </button>
            <button className="pl-1" onClick={handleLike}>
              {likeTable.includes(movie.title) ? "Liked" : "Like"}
            </button>
          </div>
          <br />
          <div className="w-full flex justify-center items-center">
            <h1 className="text-lg">
              <b>Recommendations</b>
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="rounded-box w-fit flex space-x-4 p-10">
              {movieList.map((movie) => (
                <Link
                  key={movie.title.toString()}
                  to={`/movie/${movie.title.toString()}`}
                  className="relative flex-shrink-0 w-32"
                >
                  <img
                    src={movie.URL}
                    className="w-full rounded"
                    alt={`${movie.title}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded">
                    <span className="text-white text-center">
                      {movie.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default Movie;
