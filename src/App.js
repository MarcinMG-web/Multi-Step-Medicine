import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserForm from './components/pages/UserForm'
import Therapy from './components/pages/Therapy'
import Gender from './components/pages/Gender';
import Old from './components/pages/Old';
import Issue from './components/pages/Issue';
import Language from './components/pages/Language';
import ListOfTherapist from './components/pages/ListOfTherapist';
import Succes from './components/pages/Succes';

function App() {
  return (
    <Router>
      <div className="App">
         <Switch>
            <Route exact path='/' component={UserForm} />
            <Route exact path='/therapy' component={Therapy} />
            <Route exact path='/gender' component={Gender} />
            <Route exact path='/old' component={Old} />
            <Route exact path='/issue' component={Issue} />
            <Route exact path='/language' component={Language} />
            <Route exact path='/listOfTherapist' component={ListOfTherapist} />
            <Route exact path='/succes' component={Succes} />
         </Switch>
      </div>
    </Router>
  );
}

export default App;
