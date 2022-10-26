require('dotenv').config();

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./data/typeDefs');
const resolvers = require('./data/resolvers');
const mongoose = require('mongoose');

async function startServer(){
    const app = express();
   
    const apolloServer  = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: process.env.NODE_ENV !== 'production'
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app: app});
    // app.use((req,res) => {
    //     res.send("Hello from express apollo server")
    // });
    
    await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
        .then(() => {
            console.log('Mongodb connected');
            return app.listen({port: process.env.PORT || 4000});
        })
        .then((res) => {
            console.log(`Server running at ${res.port}`);
        }
    );
    //Run local server: localhost:4000/graphql
}
startServer();
