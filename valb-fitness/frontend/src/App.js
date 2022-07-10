//3rd part imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Navbar from './Navbar';
import  Home from './Home';
//import Footer from './Footer';
// import  SelecaoLogin from './SelecaoLogin';
// import  Login from './Login';
// import  Cadastro from './Cadastro';
// import  Secretaria from './Secretaria';
// import  Professor from './Professor';
// import  Medico from './Medico';
// import  Aluno from './Aluno';


//components imports

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar/>
            <Home/>
          </Route>
          <Route path="/login">
            <h2>login</h2>
            {/* <Login /> */}
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