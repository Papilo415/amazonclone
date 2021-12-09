const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const { response, request } = require("express");
const Stripe = require("stripe")('sk_test_51K2LlnAbkVIFVVqlU87O5BBkr7nQeSEpqGAarCszjeq6i7pc9RgsLwzF0F22iYb96Yq56YvFoiJhz6scMOyey8cc00zA0KKcx2')

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get("/", (request, response) => response.status(200).send ("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>>", total)

    const paymentIntent = await Stripe.paymentIntent.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
 
// - Listen command
exports.api = functions.https.onRequest(app)

//Example end point
//http function initialized (http://localhost:5001/clone-46ee7/us-central1/api