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

export const HOme = () => {
	const { loading, error, data } = useQuery( postQuery );
	console.warn( useQuery( postQuery ) );
	return (
		<div>Home</div>
	)
};
