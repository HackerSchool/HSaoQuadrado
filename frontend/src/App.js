import React from "react";
import QuestionPage from "./pages/QuestionPage.js";
import LoginPage from "./pages/LoginPage.js";
import GenExamPage from "./pages/GenExamPage.js";
import ExamPage from "./pages/ExamPage.js";
import Navbar from "./components/navbar/Navbar"
import ResultsPage from "./pages/ResultsPage.js"
import RegistrationPage from "./pages/RegistrationPage.js";
import QuestionSubmissionPage from "./pages/QuestionSubmissionPage";
import SubmittedQuestions from "./pages/SubmittedQuestions.js";
import LandingPage from "./pages/LandingPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import axios from "axios";
import {
	ThemeProvider,
} from "@material-ui/core/styles";
import globalTheme from "./globalTheme"

axios.defaults.headers.common["Authorization"] = localStorage.getItem("Authorization");

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
		<Navbar />

		<Router>
			<Switch>
			<Route exact path="/" component={LandingPage}/>
			<Route path="/question/:id" component={QuestionPage} />
			<Route path="/login" component={LoginPage} />
			<Route exact path="/exames" component={GenExamPage} />
			<Route exact path="/exame/:id" component={ExamPage} />
			<Route exact path="/resultado/:id" component={ResultsPage} />
			<Route exact path="/registar" component={RegistrationPage} />
			<Route exact path="/submeter_questao" component={QuestionSubmissionPage} />
			<Route exact path="/questoes_submetidas" component={SubmittedQuestions} />
			<Route exact path="/perfil" component={ProfilePage} />
			</Switch>
		</Router>
	</ThemeProvider>
  );
}

export default App;
