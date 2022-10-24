const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        id: ID
        name: String
        description: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInput): Product
        deleteProduct(id: ID!): String
    }
    
    type Query{
        hello: String
        getAllProducts: [Product]
        getProduct(id: ID): Product
    }
`;


module.exports = typeDefs;
