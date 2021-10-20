import './App.css';
import Navbar from './componement/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Services from './componement/Services/Services';
import Error from './componement/Error/Error';
import Contact from './componement/Contact/Contact';
import About from './componement/About/About';
import Home from './componement/Home/Home';
import Footer from './componement/Footer/Footer';
import Login from './componement/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './componement/PrivateRoute/PrivateRoute';
import Details from './componement/Details/Details';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>


            <PrivateRoute exact path='/details/:doctorId'>
              <Details></Details>
            </PrivateRoute>

            <PrivateRoute exact path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='*'>
              <Error></Error>

            </Route>





          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;