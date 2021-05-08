import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import VizSensor from 'react-visibility-sensor';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '6px 16px',
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
}));

const WorkHistory = () => {
	const classes = useStyles();
	let [active, setActive] = useState(false);

	return (
		<Fragment>
			<Typography variant='h6' component='h1' align='center'>
				Work Experience
			</Typography>
			<Timeline align='alternate'>
				<VizSensor
					onChange={(isVisible) => {
						active === false ? setActive(isVisible) : setActive(true);
					}}>
					<TimelineItem>
						<TimelineOppositeContent>
							<Typography variant='body2' color='textSecondary'>
								2014 - Present
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color='primary' />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Slide in={active} timeout={1000} direction='right'>
								<Paper elevation={3} className={classes.paper}>
									<Typography variant='h6' component='h1'>
										Philippine Savings Bank
									</Typography>
									<Typography>Technical Lead / Systems Analyst</Typography>
								</Paper>
							</Slide>
						</TimelineContent>
					</TimelineItem>
				</VizSensor>
				<TimelineItem>
					<TimelineOppositeContent>
						<Typography variant='body2' color='textSecondary'>
							2012 - 2014
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color='secondary' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Slide in={active} timeout={1000} direction='left'>
							<Paper elevation={3} className={classes.paper}>
								<Typography variant='h6' component='h1'>
									Interprise Technology Group Philippines, Inc.
								</Typography>
								<Typography>Software Developer</Typography>
							</Paper>
						</Slide>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<Typography variant='body2' color='textSecondary'>
							2010 - 2012
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot color='primary' />
					</TimelineSeparator>
					<TimelineContent>
						<Slide in={active} timeout={1000} direction='right'>
							<Paper elevation={3} className={classes.paper}>
								<Typography variant='h6' component='h1'>
									Iwave. Inc.
								</Typography>
								<Typography>Software Developer</Typography>
							</Paper>
						</Slide>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</Fragment>
	);
};

export default WorkHistory;
