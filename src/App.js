import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInSignUp from './components/SignInSignUp/SignInSignUp';
function App() {
  return (
   <div>
     <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
     </Router>
   </div>

  );
}

export default App;
