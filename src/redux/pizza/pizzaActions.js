//buy pizza

import {BUY_PIZZA} from "./pizzaActionTypes";

let buyPizza = () => {
    return {
        type:BUY_PIZZA,
        payload : {
            info:'Purchasing a Pizza'
        }
    }
}
export {buyPizza}