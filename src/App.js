import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Therapy from './components/pages/1_Therapy';
import Gender from './components/pages/2_Gender';
import Old from './components/pages/3_Old';
import Issue from './components/pages/4_Issue';
import Language from './components/pages/5_Language';

import Succes from './components/pages/Succes';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>

          <Route exact path='/'>
            <Therapy />
          </Route>
          <Route path='/gender'>
            <Gender />
          </Route>
          <Route path='/old'>
            <Old />
          </Route>
          <Route path='/issue'>
            <Issue />
          </Route>
          <Route path='/language'>
            <Language />
          </Route>

          <Route path='/succes'>
            <Succes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
