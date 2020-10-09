import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import client from './apolloClient';

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
			<ToastContainer position="bottom-right" autoClose={3000} />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
