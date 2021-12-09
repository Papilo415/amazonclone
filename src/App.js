import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header"
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login"
import Payment from "./Payment";
import Orders from "./Orders"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";





const stripePromise = loadStripe('pk_test_51K2LlnAbkVIFVVqlmhcqSFi737JtTHe2m3aFUMAMJZLrkfIhxmekppCIwOugoIqRUQXO5CijAXUIBsTbcyiw8e9200rNOAvfoQ'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
return (
     //BEM
    <Router>
     <div className="app">
     <Routes>
     <Route exact path="/orders" element={<><Header/><Orders/></>}/>

     <Route exact path="/login" element={<><Login/></>}/>

     <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
     <Route exact path="/payment" element={<><Header/><Elements stripe={stripePromise}><Payment/></Elements></>}/>
      
      <Route exact path="/" element={<><Header/><Home/></>}/>
      </Routes>
     
     
    </div>
  </Router>
  

);
}
export default App;