import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		textTransform: 'none',
	},
	title: {
		flexGrow: 1,
		fontFamily: 'Kaushan Script',
		fontWeight: 'bold',
	},
	title2: {
		flexGrow: 1,
		'&::before': {
			content: '"JG "',
			fontFamily: 'Kaushan Script',
			fontWeight: 'bold',
		},
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' color='transparent' elevation={0}>
				<Toolbar>
					<Hidden smUp>
						<Typography variant='h6' className={classes.title}>
							JG
						</Typography>
					</Hidden>
					<Hidden xsDown>
						<Typography variant='h6' className={classes.title2}>
							| DESIGN, CREATE, DEPLOY
						</Typography>
					</Hidden>
					<Button color='inherit' className={classes.menuButton}>
						Home
					</Button>
					<Button
						href='#WorkHistory'
						color='inherit'
						className={classes.menuButton}>
						Work
					</Button>
					<Button href='#Skills' color='inherit' className={classes.menuButton}>
						Skills
					</Button>
					<Button
						href='#Projects'
						color='inherit'
						className={classes.menuButton}>
						Projects
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
