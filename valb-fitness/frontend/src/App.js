//3rd part imports
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components imports

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h2>Navbar</h2>
            <h2>Home</h2>
            {/* <Navbar /> */}
            {/* <Home /> */}
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