import React from "react";
import { gql, useQuery } from "@apollo/client";

interface Products {
  allProducts: ProductsData;
}

interface ProductsData {
  data: [Product];
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: Float32Array;
}

const App = () => {
  const { data } = useQuery<Products>(gql`
    query getProducts {
      allProducts {
        data {
          _id
          name
          description
          price
        }
      }
    }
  `);

  if (!data) return null;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {data.allProducts.data.map((product) => {
        return (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <div>{product.description}</div>
            <div>{product.price} SEK</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
