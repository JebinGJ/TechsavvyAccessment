import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";
import MetricsSlice from "./reducers/MetricsSlice";

export const store = configureStore({
    reducer: combineReducers({
        user: UserSlice,
        Metrics: MetricsSlice,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch