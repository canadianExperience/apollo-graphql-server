const Products = require('../models/Product.model')

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World';
        },
        getAllProducts: async () => {
            return await Products.find();
        },
        getProduct: async (parent, {id}, context, info) => {
            return await Products.findById(id);
        },
    },
    Mutation: {
        createProduct: async (parent, args, context, info) => {
            const {name, description} = args.input;
            const product = new Products({name, description});
            await product.save();
            return product;
        },
        updateProduct: async (parent, args, context, info) => {
            const {id, name, description} = args.input;
            const product = await Products.findOneAndUpdate(
                id,
                {name, description},
                {new: true}
            );
            return product;
        },
        deleteProduct: async (parent, {id}, context, info) => {
            await Products.findByIdAndDelete(id);
            return 'Successfuly deleted product'
        }
    }
};

module.exports = resolvers;