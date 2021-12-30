import { combineReducers, createStore } from "redux";
import { employeesReducer } from "./employees-state";
import { productsReducer } from "./products-state";

const reducers = combineReducers({ productsState: productsReducer, employeesState: employeesReducer });
const store = createStore(reducers);

export default store;