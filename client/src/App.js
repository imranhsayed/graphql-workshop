import React from 'react';
import './App.css';

import client from './ApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import { Home } from "./components/Home";


const App = () =>  (
	<ApolloProvider client={ client }>
		<Home/>
	</ApolloProvider>
);

export default App;
