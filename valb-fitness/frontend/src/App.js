//3rd part imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Navbar from './Navbar';
import  Home from './Home';
import Footer from './Footer';
import  Team from './Team';
import StaffTeam from './StaffTeam';
// import  UserLogIn from './UserLogIn';
// import  ManagerLogIn from './ManagerLogIn';
// import  CoachLogIn from './CoachLogIn';
// import  DoctorLogIn './DoctorLogIn';
// import  UserSignUp from './UserSignUp';
// import  ManagerSignUp from './ManagerSignUp';
// import  CoachSignUp from './CoachSignUp';
// import  DoctorSignUp from './DoctorSignUp';
// import  Workout from './Workout';


//components imports

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/StaffTeam">
            <StaffTeam />
          </Route>
          <Route path="/UserLogIn">
            <h2>Log in de Aluno</h2>
          </Route>
          <Route path="/ManagerLogIn">
            <h2>Log in da secretaria</h2>
          </Route>
          <Route path="/CoachLogIn">
            <h2>Log in do treinador</h2>
          </Route>
          <Route path="/DoctorLogIn">
            <h2>Log in do médico</h2>
          </Route>
          <Route path="/workout/:id">
            <h2>workout #id</h2>
            {/* <WorkoutDetails /> */}
          </Route>
          <Route path='*'>
            <h2>404 not found</h2>
            {/* <NotFound /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;