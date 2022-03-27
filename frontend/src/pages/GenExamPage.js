import React, { useState } from "react";
import {
	Typography,
	Grid,
	Switch,
	FormControl,
	FormLabel,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Button
} from "@material-ui/core";
import { createExam } from "../api";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	body: {
		textAlign: "center"
	},
	upperSideText:{
		color : theme.palette.secondary.main
	},
}))

const GenExamPage = () => {
	const classes = useStyles();

	const [dictSubSubjects, setDictSubSubjects] = useState({
		geometry: false,
		imaginary: false,
		statistics: false,
		probability: false
	})

	const [dictYears, setDictYear] = useState({
		tenthGrade: false,
		eleventhGrade: false,
		twelfthGrade: false
	})

	const [options, setOptions] = useState({
		randomSubSubject: true,
		randomGrade: true
	})

	const baseSubSubjects = {
		geometry: false,
		imaginary: false,
		statistics: false,
		probability: false
	}


	const baseYear = {
		tenthGrade: false,
		eleventhGrade: false,
		twelfthGrade: false
	}


	const resetDictYear = () => {
		setDictYear(baseYear)
	}


	const resetDictSubSubjects = () => {
		setDictSubSubjects(baseSubSubjects);
	}


	const handleChangeYear = (event) => {
		if (options.randomGrade) setOptions({...options, "randomGrade": false});
		setDictYear({...dictYears, [event.target.name]: event.target.checked});
	}


	const handleChangeSubSubjects = (event) => {
		if (options.randomSubSubject) setOptions({...options, "randomSubSubject": false});
		setDictSubSubjects({...dictSubSubjects, [event.target.name]: event.target.checked});
	}


	const handleChangeRandomSubSubject = (event) => {
		setOptions({...options, [event.target.name]: event.target.checked});

		if (!options.randomSubSubject) {
			resetDictSubSubjects();
		}
	}


	const handleChangeRandomGrade = (event) => {
		setOptions({...options, [event.target.name]: event.target.checked});

		if (!options.randomGrade) {
			resetDictYear();
		}
	}



	const handleClick = () => {
		const subSubjects = [];

		if (dictSubSubjects.geometry) subSubjects.push("Geometria");

		if (dictSubSubjects.geometry) subSubjects.push("Imaginários");

		let year = 0;
		if (options.tenthGrade) year = 10;
		if (options.eleventhGrade) year = 11;
		if (options.twelfthGrade) year = 12;

		createExam({
			subject: "math",
			randomSubSubject: options.randomSubSubject,
			subSubjects: subSubjects,
			year: year
		}, (res) => {
			window.location.href = "/exame/" + res.data.id;
		})
	}

	// TODO: REVIEW everything above this line for the new page, see if it makes sense
	return (
		<Grid container>
			<Grid item xs = {5}>
				<Typography className={classes.upperSideText} variant="h5" >Personaliza o teu exame</Typography>
			</Grid>
			<Grid item xs = {2}>
				<Typography variant="h6">ou</Typography> {/*Maybe put this in Bold */}
			</Grid>
			<Grid item xs = {5}>
				<Typography className={classes.upperSideText} variant="h5">Deixa isso connosco</Typography>
			</Grid>
			<Grid container xs = {12}>

				<Grid container xs ={6}> {/*left lower panel*/}
					<Grid container> {/*Pick Subject*/}
						<Grid item>

						</Grid>
						<Grid container>

						</Grid>
					</Grid> 

					<Grid container> {/* Pick year*/}
						<Grid item>

						</Grid>	
						<Grid container>

						</Grid>
					</Grid> 

					<Grid container> {/*Pick Themes*/}
						<Grid item>

						</Grid>
						<Grid container>

						</Grid>
					</Grid> 

					<Grid item> {/*Começar Button*/}
					</Grid> 
				</Grid>

				<Grid container xs ={6}> {/*right lower panel*/}
					<Grid item>

					</Grid>
					<Grid item>

					</Grid>

				</Grid>

			</Grid>

		</Grid>








/* 		<Grid container className={classes.body}>
			<Grid item xs={12}>
				<Typography variant="h2">Gera um exame</Typography>
			</Grid>
			<Grid item xs={6}>
				<FormControl>
					<FormLabel>Escolhe os temas</FormLabel>
					<FormGroup>
						<FormControlLabel control={<Checkbox checked={options.randomSubSubject} onChange={handleChangeRandomSubSubject} name="randomSubSubject"/>} label="Aleatório"/>
						<FormControlLabel control={<Switch checked={dictSubSubjects.geometry && !options.randomSubSubject} onChange={handleChangeSubSubjects} name="geometry"/>} label="Geometria"/>
						<FormControlLabel control={<Switch checked={dictSubSubjects.imaginary && !options.randomSubSubject} onChange={handleChangeSubSubjects} name="imaginary"/>} label="Imaginários"/>
						<FormControlLabel control={<Switch checked={dictSubSubjects.statistics && !options.randomSubSubject} onChange={handleChangeSubSubjects} name="statistics"/>} label="Estatística"/>
						<FormControlLabel control={<Switch checked={dictSubSubjects.probability && !options.randomSubSubject} onChange={handleChangeSubSubjects} name="probability"/>} label="Probabilidades"/>
					</FormGroup>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl>
					<FormLabel>Escolhe os anos</FormLabel>
					<FormGroup>
						<FormControlLabel control={<Checkbox checked={options.randomGrade} onChange={handleChangeRandomGrade} name="randomGrade"/>} label="Aleatório"/>
						<FormControlLabel control={<Switch checked={dictYears.tenthGrade} onChange={handleChangeYear} name="tenthGrade"/>} label="10º"/>
						<FormControlLabel control={<Switch checked={dictYears.eleventhGrade} onChange={handleChangeYear} name="eleventhGrade"/>} label="11º"/>
						<FormControlLabel control={<Switch checked={dictYears.twelfthGrade} onChange={handleChangeYear} name="twelfthGrade"/>} label="12º"/>
					</FormGroup>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<Button variant="contained" onClick={handleClick}>Gerar exame</Button>
			</Grid>
			<Grid item>
				
			</Grid>
		</Grid> */


	);
} 

export default GenExamPage;