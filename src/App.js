import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Theme = createMuiTheme({
	typography: {
		fontFamily: 'Oswald',
		h2: {
			fontWeight: 600,
		},
	},
	palette: {
		background: {
			paper: '#f3f4ed',
			default: '#f3f4ed',
		},
	},
});

function App() {
	return (
		<Fragment>
			<ThemeProvider theme={Theme}>
				<Router>
					<Container fixed>
						<Switch>
							<Route exact path='/' component={Home} />
						</Switch>
					</Container>
				</Router>
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
