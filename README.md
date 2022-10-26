
# Apollo GraphQL

## Install dependencies:
```npm init -y```

```npm i express apollo-server-express graphql mongoose```

```npm i -D nodemon```

## Queries:
```
query{
  getAllProducts {
    id
    name
    description
  }
}
```
```
query{
  getProduct(id: "635698ae99e8fb5f82530038") {
    name
    description
  }
}
```
## Mutations:
```
mutation{
  createProduct(input: {
    name: "Oats"
    description: "Oats description..."
  }) {
    id
    name
    description
  }
}
```
```
mutation{
  updateProduct(input: {
    id: "635691fc2efb5c763855028a"
    name: "Apple"
    description: "Apple description..."
  }) {
    id
    name
    description
  }
}
```
```
mutation{
  deleteProduct(id: "635692252efb5c763855028c")
}
```

<img width="1072" alt="image" src="https://user-images.githubusercontent.com/45378000/197872790-1349410f-6270-4fc6-a64b-c89c4ffeb3b7.png">



