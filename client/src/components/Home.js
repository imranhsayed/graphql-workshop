import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import renderHTML from 'react-render-html';

const postQuery = gql`
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
	const { loading, error, data } = useQuery( postQuery );

	console.warn( 'hey', data );

	if ( loading ) {
		return <p>Loading...</p>
	}
	if ( error ) {
		return <p>Error</p>
	}

	return <div>Hey</div>;

	return data.posts.edges.map( item => (
		(
			<div key={ item.node.id } className="card border-primary m-5" style={{ maxWidth: '20rem' }}>
				<div className="card-header">{ item.node.title }</div>
				<div className="card-body">
					<div className="card-text">{ renderHTML( item.node.content ) }</div>
				</div>
			</div>
		)
	) )
};
