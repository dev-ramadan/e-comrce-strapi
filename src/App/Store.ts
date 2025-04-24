import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './features/loginSlice'; // عدل المسار حسب اسم الملف

export const store = configureStore({
  reducer: {
    login : loginSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch