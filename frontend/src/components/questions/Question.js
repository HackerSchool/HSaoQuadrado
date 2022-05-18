import React, { useEffect, useRef } from "react";
import {
	Typography,
	Grid,
	Paper,
} from "@mui/material";
import { useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import QuestionImage from "./QuestionImage";
import Answer from "./Answers";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math';
import remarkKatex from 'rehype-katex';
import remarRehype from 'remark-rehype';

const useStyles = makeStyles(_theme => ({
	questionBox: {
		width: "100%",
		borderRadius: 20,
		boxShadow: "0px 8px 8px #9A9A9A",
		backgroundColor: "#F9F9F9",
		border: "0.05rem solid #D9D9D9",
	},

	answers: {
		backgroundColor: '#EB5757',
		width: '100%',
		borderRadius: 20,
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		padding: 5,
		minWidth : 150,
	},

	number: {
		backgroundColor: '#EB5757',
		borderRadius: 90,
		color: '#FFFFFF',
		border: 20,
		padding: 5,
		borderColor: '#EB5757',
		position: 'relative',
		height: '2rem',
		top: '-1rem',
	},

	bold: {
		fontWeight: 600,
	},

	options: {
		fontWeight: 1,
		width: "100%",
	},

	questionText: {		
		whiteSpace: "pre-line",
		textAlign: "justify",
		textJustify: "inter-word",
		padding: 10,
		wordWrap: "break-word",
	}
}))


	
const Question = (props) => {
	const classes = useStyles();
	const [selectedAnswer, setSelectedAnswer] = useState(props.selected);

	const handleAnswer = (newAnswer) => {
		setSelectedAnswer(newAnswer);
		if (props.preview) return;
		props.callBack(newAnswer, props.answer);
	};

	return (
		
		<Grid className={classes.questionBox} container direction="row" justifyContent="flex-start" xs="auto">
			<Grid  style = {{minWidth : '400px'}} item xs="auto" justifyContent="center">
				{/* Question's number */}
				<Grid item xs={5}>
					<Paper className={classes.number}><Typography className={classes.bold} variant="h5"> {props.preview ? "Preview" : "Questão " + (props.answer + 1)} </Typography></Paper>
				</Grid>

				{/* Question's text */}
				<Grid item xs={12} spacing={3}>
						<Typography display="block" variant="h5" className={classes.questionText}><ReactMarkdown remarkPlugins={[remarkMath, remarRehype, remarkKatex]}>{props.question.text}</ReactMarkdown></Typography>
				</Grid>

				{/* Question's image */}
				{props.question.image && (
					<Grid item xs={12} spacing={3}>
						<QuestionImage preview={props.preview} question={props.question} />
					</Grid>
				)}
			</Grid>

			{/* Answers */}
			<Grid container xs='auto'> 
				<Paper className={classes.answers}>
				<Grid container direction="column" justifyContent="space-around" spacing={3}> 
					{props.question.answer.map((answer, answerIndex) => {
							return (
								<Grid item className={classes.options}>
									<Answer preview={props.preview} selected={answer.id === selectedAnswer} answer={answer} changeAnswer={handleAnswer}/>
								</Grid>
							)
						})}
				</Grid>
				</Paper>
			</Grid>
		</Grid>
      	

	)
}


export default Question;
