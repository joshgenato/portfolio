import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
	mainFeaturedPost: {
		position: 'relative',
		color: theme.palette.common.white,
		marginBottom: theme.spacing(5),
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	name: {
		color: theme.palette.secondary.main,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.7)',
	},
	heroContent: {
		position: 'relative',
		padding: theme.spacing(10),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(25),
			paddingRight: 0,
		},
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(30),
			paddingLeft: theme.spacing(15),
			paddingRight: theme.spacing(10),
			height: '25rem',
		},
		[theme.breakpoints.down('xs')]: {
			paddingTop: theme.spacing(20),
			paddingLeft: theme.spacing(10),
			paddingRight: theme.spacing(10),
			height: '25rem',
		},
	},
}));

export default function Hero(props) {
	const classes = useStyles();
	const { post } = props;

	return (
		<Paper
			className={classes.mainFeaturedPost}
			style={{ backgroundImage: `${post.image}` }}>
			{
				<img
					style={{ display: 'none' }}
					src={post.image}
					alt={post.imageText}
				/>
			}
			<div className={classes.overlay} />
			<Grid container>
				<Grid item md={6}>
					<div className={classes.heroContent}>
						<Typography
							component='h1'
							variant='h5'
							color='inherit'
							gutterBottom>
							Hi I'm,
						</Typography>
						<Slide in timeout={{ enter: 1000 }} direction='up'>
							<Typography
								className={classes.name}
								component='h1'
								variant='h2'
								color='inherit'
								gutterBottom>
								{post.title}
							</Typography>
						</Slide>
						<Typography variant='h5' color='inherit' paragraph>
							{post.description}
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}
