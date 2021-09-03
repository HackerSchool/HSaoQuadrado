import QuestionApproval from "../components/questions/QuestionApproval";
import {
	useState,
	useEffect
} from "react";
import { getSubmittedQuestions } from "../api";
import {
	Grid
} from "@material-ui/core";
import Loading from "../components/loading/Loading";

const SubmittedQuestions = () => {
	const [questions, setQuestions] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getSubmittedQuestions((res) => {
			setQuestions(res.data);
			setLoading(false)
		})
	}, [])

	if (loading) return (<Loading />)

	return (
		<Grid container spacing={4} align="center" xs={12}>
			{questions.map((question) => (
				<Grid item xs={12}>
					<QuestionApproval question={question} />
				</Grid>
			))}
		</Grid>
	)
}

export default SubmittedQuestions;