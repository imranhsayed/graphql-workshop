import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import renderHTML from 'react-render-html';

const productQuery = gql`
{
  products(first: 50) {
    nodes {
      id
      productId
      averageRating
      slug
      description
      image {
        uri
        title
        srcSet
        sourceUrl
      }
      name
      ... on SimpleProduct {
        price
        id
      }
      ... on VariableProduct {
        price
        id
      }
      ... on ExternalProduct {
        price
        id
      }
      ... on GroupProduct {
        products {
          nodes {
            ... on SimpleProduct {
              price
            }
          }
        }
        id
      }
    }
  }
}



`;


export const Home = () => {
	const { loading, error, data } = useQuery( productQuery );

	console.warn( 'products', data );

	if ( loading ) {
		return <p>Loading...</p>
	}
	if ( error ) {
		return <p>Error</p>
	}

	return <div>Hey</div>;
};
