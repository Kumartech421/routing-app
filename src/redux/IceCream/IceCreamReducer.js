import { BUY_ICECREAM } from "./IceCreamType";

const InitialState = {
    NumOfIceCream : 10
}
const IceCreamReducer = (state = InitialState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state, NumOfIceCream : state.NumOfIceCream - 1
        }
        default : return state;
    }
}
export default IceCreamReducer;