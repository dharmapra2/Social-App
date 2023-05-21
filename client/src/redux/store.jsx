import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "./Reducers";

const localStorage = {
  loadFromLocalStorage: (key = "store") => {
    try {
      const serializedStore = window.localStorage.getItem("store");
      if (serializedStore === null) return undefined;
      return JSON.parse(serializedStore);
    } catch (error) {
      console.log(`localStorage.getItem error ==> ${error}`);
      return null;
    }
  },
  saveToLocalStorage: (value, key = "store") => {
    try {
      const serializedStore = JSON.stringify(value);
      window.localStorage.setItem(key, serializedStore);
    } catch (error) {
      console.log(`localStorage.setItem error ==> ${error}`);
    }
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = localStorage?.loadFromLocalStorage();
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debouncedSaveToLocalStorage = debounce(
  localStorage?.saveToLocalStorage,
  1000
);
store.subscribe(() => debouncedSaveToLocalStorage(store.getState()));
export default store;
