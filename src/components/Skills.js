import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactJSIcon from '../assets/skills/ReactJS.svg';
import JavaScript from '../assets/skills/javascript.png';
import Html from '../assets/skills/html.png';
import Css from '../assets/skills/css.png';
import CSharp from '../assets/skills/csharp.png';
import NodeJS from '../assets/skills/nodejs.png';
import Umbraco from '../assets/skills/umbraco.png';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	logo: {
		height: '10vmin',
	},
}));

const Skills = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Typography variant='h6' component='h1' align='center'>
				Skills
			</Typography>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item md xs={12}>
						<Paper className={classes.paper} elevation={0}>
							<Typography variant='h6' component='h1' align='center'>
								Front-end
							</Typography>
							<Grid container spacing={3}>
								<Grid item md xs>
									<img src={ReactJSIcon} className={classes.logo} alt='logo' />
									<Typography align='center'>ReactJS</Typography>
								</Grid>
								<Grid item md xs>
									<img src={JavaScript} className={classes.logo} alt='logo' />
									<Typography align='center'>Javascript</Typography>
								</Grid>
								<Grid item md xs>
									<img src={Html} className={classes.logo} alt='logo' />
									<Typography align='center'>HTML</Typography>
								</Grid>
								<Grid item md xs>
									<img src={Css} className={classes.logo} alt='logo' />
									<Typography align='center'>CSS</Typography>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item md xs={12}>
						<Paper className={classes.paper} elevation={0}>
							<Typography variant='h6' component='h1' align='center'>
								Back-end
							</Typography>
							<Grid container spacing={3}>
								<Grid item md xs>
									<img src={CSharp} className={classes.logo} alt='logo' />
									<Typography align='center'>C#</Typography>
								</Grid>
								<Grid item md xs>
									<img src={NodeJS} className={classes.logo} alt='logo' />
									<Typography align='center'>NodeJS</Typography>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item md xs={12}>
						<Paper className={classes.paper} elevation={0}>
							<Typography variant='h6' component='h1' align='center'>
								Othes
							</Typography>
							<Grid container spacing={3}>
								<Grid item md xs>
									<img src={Umbraco} className={classes.logo} alt='logo' />
									<Typography align='center'>Umbraco CMS</Typography>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
};

export default Skills;
