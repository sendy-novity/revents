import { configureStore, applyMiddleware } from "@reduxjs/toolkit";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: rootReducer,
    devToolsEnhancer: composeWithDevTools(applyMiddleware(thunk)),
    devTools: true
})