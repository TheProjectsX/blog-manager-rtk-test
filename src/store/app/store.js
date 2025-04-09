import { configureStore } from "@reduxjs/toolkit";
import postsAPIReducer, {
    middleware as postsAPIMiddleware,
} from "../features/posts/postsAPI";
import userInfoAPIReducer, {
    middleware as userInfoAPIMiddleware,
} from "../features/user/userInfoApi";
import userHistoryReducer from "../features/user/userHistorySlice";
import userPostsReducer from "../features/user/userPostsSlice";

const store = configureStore({
    reducer: {
        postsAPI: postsAPIReducer,
        userInfoAPI: userInfoAPIReducer,
        userHistory: userHistoryReducer,
        userPosts: userPostsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(postsAPIMiddleware)
            .concat(userInfoAPIMiddleware),
});

export default store;
