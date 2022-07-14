//3rd part imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Navbar from './Navbar';
import  Home from './Home';
import Footer from './Footer';
import  Team from './Team';
import StaffTeam from './StaffTeam';
import  UserLogIn from './UserLogIn';
import  ManagerLogIn from './ManagerLogIn';
import  CoachLogIn from './CoachLogIn';
import  DoctorLogIn from './DoctorLogIn';
import  UserSignUp from './UserSignUp';
import  ManagerSignUp from './ManagerSignUp';
import  CoachSignUp from './CoachSignUp';
import  DoctorSignUp from './DoctorSignUp';
import  Bodybuilding from './Planos';

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
            <UserLogIn />
          </Route>
          <Route path="/ManagerLogIn">
            <ManagerLogIn />
          </Route>
          <Route path="/CoachLogIn">
            <CoachLogIn />
          </Route>
          <Route path="/DoctorLogIn">
            <DoctorLogIn />
          </Route>
          <Route path="/UserSignUp">
            <UserSignUp />
          </Route>
          <Route path="/ManagerSignUp">
            <ManagerSignUp />
          </Route>
          <Route path="/CoachSignUp">
            <CoachSignUp />
          </Route>
          <Route path="/DoctorSignUp">
            <DoctorSignUp />
          </Route>
          <Route path="/Planos">
            <Bodybuilding />
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