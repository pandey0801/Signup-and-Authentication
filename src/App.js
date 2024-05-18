import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import AuthContext from './store/Auth-context';


function App() {
  const authCtx = useContext(AuthContext)
  return (
   
    <Router>
    <Layout>
     
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>

      {!authCtx.isLoggedIn &&(
      <Route path='/auth'>
        <AuthPage />
      </Route> )}

      {authCtx.isLoggedIn &&(
      <Route path='/profile'>
        <UserProfile />
      </Route>
      )}

      <Route path='*'>
        <Redirect to='/' />
      </Route>

    </Switch>

  </Layout>
  </Router>

  );
}

export default App;
