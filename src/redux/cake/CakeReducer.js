import { CAKE_SHOP } from "./CakeTypes"

const InitialState = {
    NumOfCakes : 20
}
const CakeReducer = (state = InitialState, action) =>{
    switch(action.type){
        case 'CAKE_SHOP' : return {
            ...state, NumOfCakes : state.NumOfCakes - 1
        }
        case 'CAKE_ADD' : return {
            ...state, NumOfCakes : state.NumOfCakes + 1
        }
        default : return state
    }
}
export default CakeReducer;