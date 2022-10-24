require('dotenv').config();

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./data/typeDefs');
const resolvers = require('./data/resolvers');
const mongoose = require('mongoose');
const mongo = process.env.MONGODB;

async function startServer(){
    const app = express();
   
    const apolloServer  = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app: app});
    app.use((req,res) => {
        res.send("Hello from express apollo server")
    });
    
    await mongoose.connect(mongo, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
        .then(() => {
            console.log('Mongodb connected');
            return app.listen({port:4000});
        })
        .then((res) => {
            console.log(`Server running at ${res.url}`);
        }
    );
}
startServer();
