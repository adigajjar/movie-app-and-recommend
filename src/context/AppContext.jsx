import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [like, setLike] = useState("Like");
  const [wish, setWish] = useState("Wishlist");
  const [likeTable, setLikeTable] = useState([]);
  const [wishTable, setWishTable] = useState([]);

  const values = {
    like,
    setLike,
    wish,
    setWish,
    likeTable,
    setLikeTable,
    wishTable,
    setWishTable,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
