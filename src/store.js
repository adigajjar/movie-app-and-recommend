import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const appSlice = createSlice({
  name: "app",
  initialState: {
    like: "Like",
    wish: "Wishlist",
    likeTable: [],
    wishTable: [],
  },
  reducers: {
    setLike: (state, action) => {
      state.like = action.payload;
    },
    setWish: (state, action) => {
      state.wish = action.payload;
    },
    addToLikeTable: (state, action) => {
      if (!state.likeTable.includes(action.payload)) {
        state.likeTable.push(action.payload);
      }
    },
    removeFromLikeTable: (state, action) => {
      state.likeTable = state.likeTable.filter(
        (item) => item !== action.payload
      );
    },
    addToWishTable: (state, action) => {
      if (!state.wishTable.includes(action.payload)) {
        state.wishTable.push(action.payload);
      }
    },
    removeFromWishTable: (state, action) => {
      state.wishTable = state.wishTable.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const {
  setLike,
  setWish,
  addToLikeTable,
  removeFromLikeTable,
  addToWishTable,
  removeFromWishTable,
} = appSlice.actions;

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export const AppStoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default store;
