import React,{Fragment} from 'react';
import pizza from '../images/pizza.jpg'
import {useDispatch, useSelector} from "react-redux";
import {buyPizza} from "../redux/pizza/pizzaActions";
let PizzaHut=()=>{
    let dispatch = useDispatch()
    let pizzaInfo = useSelector((state)=>{
        return state.pizza
    })

    let clickBuyPizza = () => {
         dispatch(buyPizza())
    }

      return(

          <Fragment>
              <pre>{JSON.stringify(pizzaInfo)}</pre>
              <div className="container mt-3">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="card">
                              <div className="card-header">
                                  <h2 className="bg-danger text-white">Pizza Hut</h2>
                              </div>
                              <div className="card-body">
                                  <div className="row">
                                     <div className="col-md-6">
                                        <img src={pizza} className="img-fluid"/>
                                     </div>
                                      <div className="col-md-6">
                                         <h2>Total:{pizzaInfo.pizzaCount}</h2>
                                          <button onClick={clickBuyPizza} className="btn btn-warning btn-sm">Buy Pizza</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </Fragment>
      )
}
export default PizzaHut