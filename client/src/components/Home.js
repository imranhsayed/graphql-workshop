import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";


const postQuery = gql`
{
	post( id: "1" ) {
		title
        content
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
	return (
			<div className="card border-primary m-5" style={{ maxWidth: '20rem' }}>
				<div className="card-header">{ data.post.title }</div>
				<div className="card-body">
					<p className="card-text">{ data.post.content }</p>
				</div>
			</div>
	)
};
