import { combineReducers } from "redux";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import CakeReducer from "./cake/CakeReducer";

const rootReducer = combineReducers({
    cake : CakeReducer,
    IceCream : IceCreamReducer
})

export default rootReducer;