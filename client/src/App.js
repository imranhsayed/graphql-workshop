import React from 'react';
import './App.css';

import client from './ApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import { HOme } from "./components/Home";


const App = () =>  (
	<ApolloProvider client={ client }>
		<HOme/>
	</ApolloProvider>
);

export default App;
