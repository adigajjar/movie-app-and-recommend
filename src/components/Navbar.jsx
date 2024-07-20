import React, { useState } from "react";
import movies from "../top250.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(searchTerm);
  };

  return (
    <nav className="bg-red-300 p-4 w-full relative">
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="flex-shrink-0">
          <a href="/" className="text-black text-2xl font-bold">
            MDB
          </a>
        </div>
        <div className="flex-grow flex justify-center relative">
          <input
            type="text"
            className="w-full max-w-xs px-4 py-2 rounded-full bg-white text-gray-800"
            placeholder="Search..."
            name="search"
            onChange={handleChange}
            value={value}
          />
          {/* <button
            onClick={() => onSearch(value)}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Search
          </button> */}
          {value && (
            <div className="absolute top-full mt-2 w-full max-w-xs bg-white rounded-lg">
              {movies
                .filter((movie) => {
                  const searchTerm = value.toLowerCase();
                  const title = movie.title.toString().toLowerCase();
                  return (
                    searchTerm &&
                    title.startsWith(searchTerm) &&
                    title !== searchTerm
                  );
                })
                .slice(0, 6)
                .map((movie) => (
                  <Link
                    key={movie.title.toString()}
                    to={`/movie/${movie.title.toString()}`}
                  >
                    <div
                      onClick={() => onSearch(movie.title)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      key={movie.title.toString()}
                    >
                      {movie.title}
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
        <Link
          className="flex items-center justify-items-end pr-2"
          to="/wishlist"
        >
          Wishlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
