# Fauna Demo

## Getting started

Clone this repo and cd into directory.

```bash
git clone git@github.com:alexanderalmstrom/fauna-demo.git
cd fauna-demo
```

Install npm dependencies.

```bash
yarn install
```

Create a `.env.local` file in the root and replace XXX with your Fauna secret key. Create your account and key at [https://fauna.com/](https://fauna.com/)

```env
REACT_APP_FAUNA_SECRET=XXX
```

Import `schema.graphql` in Fauna dashboard.

Create some products in the GraphQL playground tab with mutations.

```gql
mutation CreateProduct {
  createProduct(
    data: {
      name: "Some product name"
      description: "Some product description"
      price: 100.00
    }
  ) {
    name
    description
    price
  }
}
```

List all products with

```gql
query ListProducts {
  allProducts {
    data {
      name
      description
      price
    }
  }
}
```

Run development server

```bash
yarn start
```
