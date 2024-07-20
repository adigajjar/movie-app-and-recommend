// import React from "react";
// import movies from "../top250.json";
// import { Link } from "react-router-dom";
// import { ObjectId } from "bson";

// const Home = () => {
//   movies = movies.slice(0, 7);
//   return (
//     <div className="m-36 flex flex-col justify-center items-center">
//       <div className="flex flex-col items-center mt-10 bg-cyan-300 p-10">
//         <Link to="/filter">
//           <h2 className="text-2xl font-bold mb-4">Top Movies</h2>
//         </Link>
//         <div className="carousel rounded-box w-full max-w-screen-lg flex space-x-4">
//           {Array.isArray(movies) &&
//             movies.map((movie) => (
//               <Link
//                 key={movie.title.toString()}
//                 to={`/movie/${movie.title.toString()}`}
//                 className="relative flex-shrink-0 w-32"
//               >
//                 <img
//                   src={movie.URL}
//                   className="w-full rounded"
//                   alt={`${movie.title}`}
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded">
//                   <span className="text-white text-center">{movie.title}</span>
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import moviesData from "../top250.json";
import { Link } from "react-router-dom";

const Home = () => {
  const movies = moviesData.slice(0, 8);
  return (
    <div className="m-10 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mt-10 w-full max-w-screen-lg">
        <Link to="/filter">
          <h2 className="text-2xl font-bold mb-4 underline">Top Movies</h2>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit">
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <Link
                key={movie.title.toString()}
                to={`/movie/${movie.title.toString()}`}
                className="relative"
              >
                <img
                  src={movie.URL}
                  className="w-fit h-auto rounded"
                  alt={`${movie.title}`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded">
                  <span className="text-white text-center">{movie.title}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
