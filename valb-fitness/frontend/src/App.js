//3rd part imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Team from './Team';
import StaffTeam from './StaffTeam';
import UserLogIn from './UserLogIn';
import ManagerLogIn from './ManagerLogIn';
import CoachLogIn from './CoachLogIn';
import DoctorLogIn from './DoctorLogIn';
import UserSignUp from './UserSignUp';
import ManagerSignUp from './ManagerSignUp';
import CoachSignUp from './CoachSignUp';
import DoctorSignUp from './DoctorSignUp';
import Planos from './Planos';

// import  Workout from './Workout';

//components imports

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Navbar login='true' />
            <Home />
            <Footer />
          </Route>
          <Route path='/Team'>
            <Navbar login='true' />
            <Team />
            <Footer />
          </Route>
          <Route path='/StaffTeam'>
            <Navbar login='false' />
            <StaffTeam />
            <Footer />
          </Route>
          <Route path='/UserLogIn'>
            <Navbar login='false' />
            <UserLogIn />
            <Footer />
          </Route>
          <Route path='/ManagerLogIn'>
            <Navbar />
            <ManagerLogIn />
            <Footer />
          </Route>
          <Route path='/CoachLogIn'>
            <Navbar />
            <CoachLogIn />
            <Footer />
          </Route>
          <Route path='/DoctorLogIn'>
            <Navbar />
            <DoctorLogIn />
            <Footer />
          </Route>
          <Route path='/UserSignUp'>
            <Navbar />
            <UserSignUp />
            <Footer />
          </Route>
          <Route path='/ManagerSignUp'>
            <Navbar />
            <ManagerSignUp />
            <Footer />
          </Route>
          <Route path='/CoachSignUp'>
            <Navbar />
            <CoachSignUp />
            <Footer />
          </Route>
          <Route path='/DoctorSignUp'>
            <Navbar />
            <DoctorSignUp />
            <Footer />
          </Route>
          <Route path='/Planos'>
            <Navbar />
            <Planos />
            <Footer />
          </Route>
          <Route path='/workout/:id'>
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
