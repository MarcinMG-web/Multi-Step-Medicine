import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Therapy from './components/pages/Therapy';
import Gender from './components/pages/Gender';
import Old from './components/pages/Old';
import Issue from './components/pages/Issue';
import Language from './components/pages/Language';
import ListOfTherapist from './components/pages/ListOfTherapist';
import Succes from './components/pages/Succes';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Therapy} />
          <Route path='/gender' component={Gender} />
          <Route path='/old' component={Old} />
          <Route path='/issue' component={Issue} />
          <Route path='/language' component={Language} />
          <Route path='/listOfTherapist' component={ListOfTherapist} />
          <Route path='/succes' component={Succes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
