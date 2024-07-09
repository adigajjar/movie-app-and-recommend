import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
// import { setLike, setWish, setLikeTable, setWishTable } from "../store.js";
import { removeFromWishTable, removeFromLikeTable } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  // const { likeTable, setLikeTable } = useContext(AppContext);
  // const { wishTable, setWishTable } = useContext(AppContext);
  // const { like, setLike } = useContext(AppContext);
  // const { wish, setWish } = useContext(AppContext);
  const dispatch = useDispatch();
  const { like, wish, likeTable, wishTable } = useSelector(
    (state) => state.app
  );

  // const handleLikeClick = (likedTitle) => {
  //   dispatch(
  //     setLikeTable((prevLikeTable) =>
  //       prevLikeTable.filter((item) => item !== likedTitle)
  //     )
  //   );
  //   dispatch(setLike("Like"));
  // };

  // const handleWishClick = (wishTitle) => {
  //   dispatch(
  //     setWishTable((prevWishTable) =>
  //       prevWishTable.filter((item) => item !== wishTitle)
  //     )
  //   );
  //   dispatch(setWish("Wishlist"));
  // };

  const handleLikeClick = (like) => {
    dispatch(removeFromLikeTable(like));
  };

  const handleWishClick = (wish) => {
    dispatch(removeFromWishTable(wish));
  };

  const maxLength = Math.max(wishTable.length, likeTable.length);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-screen-lg">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Wishlist
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Likes
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: maxLength }).map((_, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {wishTable[index] ? (
                    <div className="flex justify-between items-center">
                      <span>{wishTable[index]}</span>
                      <button
                        onClick={() => handleWishClick(wishTable[index])}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ) : null}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {likeTable[index] ? (
                    <div className="flex justify-between items-center">
                      <span>{likeTable[index]}</span>
                      <button
                        onClick={() => handleLikeClick(likeTable[index])}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
