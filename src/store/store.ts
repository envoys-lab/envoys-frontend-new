import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './company/navbar'
import modalReducer from './modal/reducer'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    navbar: navbarReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
