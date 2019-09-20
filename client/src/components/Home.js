import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import renderHTML from 'react-render-html';

const postQuery = gql`
{
    posts {
      edges {
        node {
          id
          title
          content
        }
      }
    }
}
`;


export const Home = () => {
	const { loading, error, data } = useQuery( postQuery );

	if ( loading ) {
		return <p>Loading...</p>
	}
	if ( error ) {
		return <p>Error</p>
	}

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
