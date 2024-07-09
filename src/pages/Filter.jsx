import { useState } from "react";
import React from "react";
import movies from "../top250.json";
import { Link } from "react-router-dom";
const Filter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  let currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const [sortedMovies, setSortedMovies] = useState(false);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handleFilter = () => {
    sortedMovies === false ? setSortedMovies(true) : setSortedMovies(false);
  };
  if (sortedMovies) {
    currentMovies = currentMovies.sort((a, b) =>
      a.title.toString().localeCompare(b.title.toString())
    );
  } else {
    currentMovies = currentMovies.sort((a, b) =>
      b.title.toString().localeCompare(a.title.toString())
    );
  }
  return (
    <>
      <div className="m-20 flex flex-col justify-center items-center">
        <button className="bg-red-200 rounded p-2 w-1/6" onClick={handleFilter}>
          Filter
        </button>
        <br />
        {currentMovies.map((movie) => (
          <div key={movie._id.$oid} className="w-2/4">
            <div className="bg-cyan-300 overflow-hidden rounded-md mb-4">
              <div className="p-4">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <img
                    src={movie.URL}
                    alt={movie.title}
                    className="h-auto rounded mb-2 md:mb-0 md:mr-4"
                  />
                  <div>
                    <Link
                      key={movie.title.toString()}
                      to={`/movie/${movie.title.toString()}`}
                    >
                      <p className="font-bold mb-2">{movie.title}</p>
                    </Link>
                    <p className="text-sm">{movie.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-300 rounded"
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
