import { configureStore } from "@reduxjs/toolkit";

import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    devToolsEnhancer: devToolsEnhancer(),
    devTools: true
})