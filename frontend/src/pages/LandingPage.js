import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { ReactComponent as Girl } from "../assets/girl_studying.svg"
import { ReactComponent as Emoji } from "../assets/winking_emoji.svg"
import NormalButton from '../components/buttons/NormalButton'

const useStyles = makeStyles(theme => ({
	mainBox: {
		marginTop: "5rem",
		paddingLeft: "3rem"
	},
	slogan: {
		fontSize: 55,
		textAlign: "center",
	},
	girl: {
		marginRight: "20rem"
	}
}))

const LandingPage = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.mainBox} xs={12} justifyContent="center" alignItems="center">
			<Grid item container xs={6} direction="column" align='center' spacing={6}>
				<Grid item>
					<Typography className={classes.slogan}>
						Exames nacionais<br/><i>made easy</i> <Emoji />
					</Typography>
				</Grid>
				<Grid item>
					<NormalButton xs={6} text="Inscreve-te" href="/login"  fontSize={41} />
				</Grid>
			</Grid>
			<Grid item>
				<Girl className={classes.girl}/>
			</Grid>
		</Grid>
	)
}

export default LandingPage
